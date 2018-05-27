import {Component, OnInit} from '@angular/core';
import {Message} from "../message";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages: Message[];

  constructor(private messageService: MessageService) {
  }

  getMessages(): void {
    this.messages = this.messageService.getMessages();
  }

  ngOnInit() {
    this.getMessages();
  }

}
