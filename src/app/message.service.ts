import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Message} from "./message";
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messagesUrl = 'http://mtstest.loc/chat/messages/1';

  constructor(private http: HttpClient,
              private messageService: MessageService) {
  }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.messagesUrl)
  }

}
