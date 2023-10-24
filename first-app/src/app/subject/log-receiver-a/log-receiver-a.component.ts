import { Component, OnDestroy, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { IMessaggio } from '../messaggio.interface';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-log-receiver-a',
  templateUrl: './log-receiver-a.component.html',
  styleUrls: ['./log-receiver-a.component.css']
})
export class LogReceiverAComponent implements OnInit, OnDestroy {

  messaggio!: IMessaggio | null;
  log$!: Subscription;

  constructor(private logService: LogService) {}

  ngOnInit(): void {
    this.log$ = this.logService.logObervable.subscribe((msg) => {
      this.messaggio = msg;
      timer(3000).subscribe(() => {
        this.messaggio = null;
      })
    })
  }

  ngOnDestroy(): void {
    this.log$.unsubscribe();
  }

  get messaggioToString(): string {
    if (this.messaggio) {
      return this.messaggio.dataora.toLocaleString() + ': ' + this.messaggio.messaggio;
    }
    else {
      return '';
    }
  }

}
