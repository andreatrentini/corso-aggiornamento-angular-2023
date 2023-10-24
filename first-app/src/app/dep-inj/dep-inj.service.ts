import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepInjService {

  messaggi: string[] = ['Ciao', 'Buongiorno', 'Buonasera'];

  constructor() { }

  add(nuovoMessaggio: string): void {
    this.messaggi.push(nuovoMessaggio);
  }

  remove(index: number): void {
    this.messaggi.splice(index, 1);
  }

  update(index:number, nuovoMessaggio: string): void {
    this.messaggi[index] = nuovoMessaggio;
  }
}
