import {Component, OnInit} from '@angular/core';
import {Message} from "../message";
import {MessageService} from "../message.service";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages: Message[];

  protected chatId;

  constructor(private messageService: MessageService, private route: ActivatedRoute) {
    this.chatId = +this.route.snapshot.paramMap.get('id');
  }

  getMessages(): void {
    this.messageService.getMessages(this.chatId).subscribe(messages => this.messages = messages);
  }

  ngOnInit() {
    this.getMessages();
  }

}
