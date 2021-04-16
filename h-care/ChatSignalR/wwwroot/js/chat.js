"use strict";

//elements
var conversation = $('.conversation');
var lastSentMessages = $('.messages--sent:last-child');
//var textbar = $('.text-bar__field input');
var textbar = $('#messageInput');
var textForm = $('#form-message');
var thumber = $('.text-bar__thumb');

var scrollTop = $(window).scrollTop();

var Message = {
    currentText: "test",
    connection: null, 
	init: function(){
        
        var base = this;

        base.connection = new signalR.HubConnectionBuilder()
		.withUrl("/chatHub")
		.configureLogging(signalR.LogLevel.Information)
		.build();
        base.connection.on("ReceiveMessage", function (user, message) {
            
            if( document.getElementById("userInput").value == user )
            {
                base.createSentGroup();
            }
            else{
                base.createReceivedGroup();
            }
            
            base.currentText = user + " says " + message;
            if(base.currentText != ''){
                base.createMessage();
				base.scrollDown();
            }
            
            /*var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
            var encodedMsg = user + " says " + msg;
            var div = document.createElement("div");
            div.classList.add("messages");
        
            if( document.getElementById("userInput").value != user )
            {
                div.classList.add("messages--received");
            }
            else{
                div.classList.add("messages--sent");
            }
        
            var msg = document.createElement("div");
            msg.textContent = encodedMsg;
            msg.classList.add("message");
            div.appendChild(msg);
            document.getElementById("messagesList").appendChild(div);
        
            base.scrollDown();*/
        
        });
        
        base.connection.start().then(function () {
            //document.getElementById("sendButton").disabled = false;
			base.connection.invoke("JoinRoom", _session).catch(function (err) {
				return console.error(err.toString());
			});

        }).catch(function (err) {
            return console.error(err.toString());
        });

		thumber.on("mousedown", function(){
			textForm.submit();
		});



		base.send();


	},
	send: function(){
		var base = this;
		textForm.submit(function( event ) {
              
            event.preventDefault();
			//base.createGroup();
            base.saveText();
            
			if(base.currentText != ''){
				//base.createMessage();
				//base.scrollDown();
                var user = document.getElementById("userInput").value;
                base.connection.invoke("SendMessage", _session, user, base.currentText).catch(function (err) {
                    return console.error(err.toString());
                });
				
            }

		});
	},
	saveText: function(){
		var base = this;
		base.currentText = textbar.val();
		textbar.val('');
	},
	createMessage: function(){
		var base = this;
		lastSentMessages.append($('<div/>')
								.addClass('message')
								.text(base.currentText));
	},
	createSentGroup: function(){
		if($('.messages:last-child').hasClass('messages--received')){
			conversation.append($('<div/>')
							.addClass('messages messages--sent'));
			lastSentMessages = $('.messages--sent:last-child');
		}
    },
    createReceivedGroup: function(){
		if($('.messages:last-child').hasClass('messages--sent')){
			conversation.append($('<div/>')
							.addClass('messages messages--received'));
			lastSentMessages = $('.messages--received:last-child');
		}
	},
	scrollDown: function(){
		var base = this;
		//conversation.scrollTop(conversation[0].scrollHeight);
		conversation.stop().animate({
			scrollTop: conversation[0].scrollHeight
		}, 500);
	}
};

var Thumb = {
	init: function(){
		var base = this;
		base.send();
	},
	send: function(){
		var base = this;
		/*thumber.on("mousedown", function(){
			Message.createGroup();
			base.create();
			base.expand();
		});*/
	},
	expand: function(){
		var base = this;
		var thisThumb = lastSentMessages.find('.message:last-child');
		var size = 20;
		
		var expandInterval = setInterval(function(){ expandTimer() }, 30);
		
		function stopExpand(){
			base.stopWiggle();
			clearInterval(expandInterval);
		}
		
		var firstExpand = false;
		function expandTimer() {
			
			if(size >= 130){
				stopExpand();
				base.remove();
			}
			else{
				if(size>50){
					size += 2;
					thisThumb.removeClass('anim-wiggle');
					thisThumb.addClass('anim-wiggle-2');
				}
				else{
					size += 1;
					thisThumb.addClass()
				}
				thisThumb.width(size);
				thisThumb.height(size);
				if(firstExpand){
					conversation.scrollTop(conversation[0].scrollHeight);
				}
				else{
					Message.scrollDown();
					firstExpand = true;
				}
			}
		}
		
		thumber.on("mouseup", function(){
			stopExpand();
		});
	},
	create: function(){
		lastSentMessages.append(
			$('<div/>').addClass('message message--thumb thumb anim-wiggle')
		);
	},
	remove: function(){
		lastSentMessages.find('.message:last-child').animate({
			width: 0,
			height: 0
		}, 300);
		setTimeout(function(){
			lastSentMessages.find('.message:last-child').remove();
		}, 300);
	},
	stopWiggle: function(){
		lastSentMessages.find('.message').removeClass('anim-wiggle');
		lastSentMessages.find('.message').removeClass('anim-wiggle-2');
	}
	
}


var newMessage = Object.create(Message);
newMessage.init();

var newThumb = Object.create(Thumb);
newThumb.init();
 
