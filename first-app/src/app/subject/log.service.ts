import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IMessaggio } from './messaggio.interface';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private logs: IMessaggio[] = [];

  private logSubject = new Subject<IMessaggio>();
  logObervable = this.logSubject.asObservable();

  log(messaggio: IMessaggio): void {
    this.logs.push(messaggio);
    this.logSubject.next(messaggio);
  }

  constructor() { }
}
