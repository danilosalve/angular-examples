import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class CoinsService {
  private sockets$: WebSocketSubject<unknown>;

  constructor() {
    const url = 'wss://ws.coincap.io/prices?assets=ethereum,bitcoin';
    this.sockets$ = webSocket(url);
  }

  getStockPrices(): Observable<unknown> {
    return this.sockets$.asObservable();
  }
}
