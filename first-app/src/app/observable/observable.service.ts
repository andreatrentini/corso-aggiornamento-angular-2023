import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  generatore = new Observable<number>((generatoreNumeri) => {
    let timer = setInterval(() => {
      let numero = Math.random();
      if (numero > 0.8) {
        generatoreNumeri.error(numero + ': Troppo grande')
      }
      else {
        generatoreNumeri.next(numero);
      }
      if (numero < 0.1) {
        clearInterval(timer);
        generatoreNumeri.complete();
      }
    }, 1000);
  });

  constructor() { }
}
