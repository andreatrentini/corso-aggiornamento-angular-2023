import { Component, OnDestroy, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { IMessaggio } from '../messaggio.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-log-receiver-b',
  templateUrl: './log-receiver-b.component.html',
  styleUrls: ['./log-receiver-b.component.css']
})
export class LogReceiverBComponent implements OnInit, OnDestroy {
  
  messaggi: IMessaggio[] = [];
  log$!: Subscription;

  constructor(private logService: LogService) {}
  
  ngOnDestroy(): void {
    this.log$.unsubscribe();
  }

  ngOnInit(): void {
    this.log$ = this.logService.logObervable.subscribe((messaggio) => {
      this.messaggi.push(messaggio);
    })
  }

  messaggioToString(index: number): string {
     return this.messaggi[index].dataora.toLocaleString() + ': ' + this.messaggi[index].messaggio;
  }

}
