import {Injectable} from '@angular/core';
import { Client, Message } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import {BehaviorSubject, Observable} from 'rxjs';

export interface ChangePayload{
  payloadContent: string,
  payloadIndex: number
}

@Injectable({
  providedIn: 'root'
})
export class WebsocketService{
  private client: Client;
  private messagesSubject = new BehaviorSubject<ChangePayload>([]);
  private messages$ = this.messagesSubject.asObservable();
  constructor() {
    this.client = new Client({
      webSocketFactory: () => new SockJS('http://localhost:8080/ws'),
      debug: (str) => {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });
    this.client.onStompError = (frame) => {
      console.error('Broker reported error: ' + frame.headers['message']);
      console.error('Additional details: ' + frame.body);
    };

    this.client.activate();
  }

  sendMessage(content: string): void {
    if (this.client && this.client.connected) {
      this.client.publish({
        destination: '/app/send',
        body: JSON.stringify({ content })
      });
    } else {
      console.error('Not connected');
    }
  }

  disconnect(): void {
    if (this.client) {
      this.client.deactivate();
    }
  }
}

