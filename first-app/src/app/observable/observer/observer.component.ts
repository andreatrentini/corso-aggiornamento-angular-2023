import { Component, OnDestroy } from '@angular/core';
import { ObservableService } from '../observable.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css']
})
export class ObserverComponent implements OnDestroy {

  numeri: number[] = [];
  iscrizione$!: Subscription;

  constructor(private observableService: ObservableService) {}

  iniziaAdOsservare(): void {
    this.iscrizione$ = this.observableService.generatore.subscribe({
      next: (dato) => this.numeri.push(dato),
      error: (messaggioErrore) => console.log(messaggioErrore),
      complete: () => console.log('completato')
    })
  };

  ngOnDestroy(): void {
    this.iscrizione$.unsubscribe();
  }

}
