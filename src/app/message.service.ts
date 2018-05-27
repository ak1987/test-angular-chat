import {Injectable} from '@angular/core';
import {Message} from "./message";
import {MESSAGES} from "./mock-messages";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() {
  }

  getMessages(): Message[] {
    return MESSAGES;
  }

}