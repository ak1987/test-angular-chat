import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MessageService} from "../message.service";
import {WebsocketService} from "../websocket.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [WebsocketService, MessageService]
})
export class ChatComponent implements OnInit {

  protected chatId;

  protected messages;

  constructor(private messageService: MessageService, private route: ActivatedRoute) {
    this.chatId = this.route.snapshot.paramMap.get('id');
    messageService.messages.subscribe(msg => {
      console.log("Response from websocket: " + msg);
      switch (msg.type) {
        case 'connection_success':
          this.messageService.messages.next({
            'action' : 'auth',
            'chat_token' : '-5In7lHFT7QNEhGYQKrav3SnEojEc1Zb'
          });
          break;
        case 'msg':
          this.messages.push({
            datetime : msg.date,
            userName : msg.user_name,
            text : msg.message
          });
          console.log(this.messages);
          break;
      }
    });
  }

  sendMsg() {
    let message = JSON.stringify({
      action : 'msg',
      mag : 'test'
    });
    console.log('new message from client to websocket: ', message);
    this.messageService.messages.next(message);
  }

  /*getMessages(): void {
    this.messageService.getMessages(this.chatId).subscribe(messages => this.messages = messages);
  }*/

  ngOnInit() {
    //this.getMessages();
  }
}
