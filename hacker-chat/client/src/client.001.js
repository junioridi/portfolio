import net from 'net';
import readline from 'readline';

const rl = readline.createInterface( {
    input: process.stdin,
    ooutput: process.stdout
});


const client = new net.Socket();
client.connect(4000, '127.0.0.1', () => {
    console.log("Conectado");
    
    client.on('end', ()=>{
        console.log('Done');
    });
 
    rl.addListener( 'line', (line) =>
    {
        client.write(line);
    }); 
});


 

