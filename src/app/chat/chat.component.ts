import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MessageService} from "../message.service";
import {WebsocketService} from "../websocket.service";
import {Message} from "../message";
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [WebsocketService, MessageService]
})
export class ChatComponent implements OnInit {

  protected chatId;

  public messages;

  constructor(private messageService: MessageService, private route: ActivatedRoute) {
    this.chatId = this.route.snapshot.paramMap.get('id');
    messageService.messages.subscribe(msg => {
      console.log("Response from websocket: " + msg);
      console.log(msg.type);
      switch (msg.type) {
        case 'connection_success':
          this.messageService.messages.next({
            'type' : 'auth',
            'message' : '-5In7lHFT7QNEhGYQKrav3SnEojEc1Zb'
          });
          break;
        case 'message':
          this.messages.push({
            datetime : msg.date,
            userName : msg.userName,
            text : msg.message
          });
          break;
      }
    });
  }

  sendMsg() {
    let message = {
      action : 'msg',
      msg : 'test'
    };
    console.log('new message from client to websocket: ', message);
    this.messageService.messages.next(message);
  }

  /*getMessages() : Observable<Message[]> {
    return this.messages;
  }*/

  /*getMessages(): void {
    this.messageService.getMessages(this.chatId).subscribe(messages => this.messages = messages);
  }*/

  ngOnInit() {
    //this.getMessages();
  }
}
