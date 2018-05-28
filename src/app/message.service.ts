import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';

const CHAT_URL = 'ws://mtstest.loc:8080/';

export interface Message {
  type: string,
  message: string,
  userId: string,
  date: string,
  userName: string
}

@Injectable()
export class MessageService {
  public messages: Subject<Message>;

  constructor(wsService: WebsocketService) {
    this.messages = <Subject<Message>>wsService
      .connect(CHAT_URL)
      .map((response: MessageEvent): Message => {
        let data = JSON.parse(response.data);
        return {
          type: data.type,
          message: data.message,
          userId: data.user_id,
          userName: data.user_name,
          date: data.date,
        }
      });
  }
}