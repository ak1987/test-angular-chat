import {Component, OnInit} from '@angular/core';
import {Message} from "../message";
import {MessageService} from "../message.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages: Message[];

  constructor(private messageService: MessageService, private route: ActivatedRoute,) {
  }

  getMessages(): void {
    const chatId = +this.route.snapshot.paramMap.get('id');
    this.messageService.getMessages(chatId).subscribe(messages => this.messages = messages);
  }

  ngOnInit() {
    this.getMessages();
  }

}
