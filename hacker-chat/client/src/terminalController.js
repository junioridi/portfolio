import ComponentsBuilder from './components.js';
import { constants } from './constants.js';

export default class TerminalController
{

    #userColors = new Map();
    constructor() {}

    #pickColor(){
        return `#${(((1<<24) * Math.random() | 0 )+0x100000).toString(16)}-fg`;
    }

    #getUserColor(userName) {
        if(this.#userColors.has(userName))
            return this.#userColors.get(userName);
        
        const color = this.#pickColor();
        this.#userColors.set(userName, color);
        return color;
    }  


    #onInputReceived(eventEmitter) {
        return function() {
            const message = this.getValue();
            //console.log(message);
            this.clearValue();
        }
    }


    #onMessageReceived( {screen, chat }) {
        return msg => {
            const {userName, message } = msg;
            const color = this.#getUserColor(userName);
            chat.addItem(`{${color}}[${color}][${color}]{bold}${userName}: ${message}{/}`);
            screen.render();
            //console.log(screen.render());
        }
    }

    #onLogChanged( {screen, activityLog }) {
        return msg => {
            
            const [userName] = msg.split(/\s/);
            const color = this.#getUserColor(userName.trim());
            
            //console.log(userName);
            activityLog.addItem(`{${color}}[${color}]${userName}{bold}${msg.toString()}{/}`)
            screen.render();
            //console.log(screen.render());
        }
    }
 
    #onStatusUpdated( {screen, status}) {
        return users => {
            const {content} = status.items.shift();
            status.clearItems();
            status.addItem(content);
            users.forEach(userName => {            
                const color = this.#getUserColor(userName);
                status.addItem(`{${color}}[${color}]${userName}{bold}${userName}{/}`);
            });
            screen.render();
        }
    }
    
    #registerEvents(eventEmitter, components) {        
        eventEmitter.on(constants.events.app.MESSAGE_RECEIVED, this.#onMessageReceived(components));
        eventEmitter.on(constants.events.app.ACTIVITYLOG_UPDATED, this.#onLogChanged(components));
        eventEmitter.on(constants.events.app.STATUS_UPDATED, this.#onStatusUpdated(components));
    }        
    
    async InitializeTable(eventEmitter){
        const components = new ComponentsBuilder() 
            .setScreen( { title : 'HackerChat' } )
            .setLayoutComponent()
            .setInputComponent(this.#onInputReceived(eventEmitter))
            .setChatComponent()
            .setStatusComponent()
            .setActivityLogComponent()
            .build();

        this.#registerEvents(eventEmitter, components); 

        components.input.focus();
        components.screen.render();

        /*setInterval(() => {
            const users = ['Junior'];
            eventEmitter.emit(constants.events.app.MESSAGE_RECEIVED, {userName:"Junior", message:"Opa deu!"});
            users.push('Bugado');
            eventEmitter.emit(constants.events.app.MESSAGE_RECEIVED, {userName:"Bugado", message:"Opa deu não!"});
            users.push('hacker');
            eventEmitter.emit(constants.events.app.MESSAGE_RECEIVED, {userName:"hacker", message:"Opa deu sim!"});
            users.push('galinha');
            eventEmitter.emit(constants.events.app.MESSAGE_RECEIVED, {userName:"galinha", message:"Opa deu!"});             
            eventEmitter.emit(constants.events.app.ACTIVITYLOG_UPDATED, 'Junior entrou');
            eventEmitter.emit(constants.events.app.STATUS_UPDATED, users);
        }, 2000);*/
 
        console.log("Inicializado");
    }
}
