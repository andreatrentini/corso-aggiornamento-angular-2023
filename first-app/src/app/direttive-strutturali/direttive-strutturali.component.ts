import { Component } from '@angular/core';

@Component({
  selector: 'app-direttive-strutturali',
  templateUrl: './direttive-strutturali.component.html',
  styleUrls: ['./direttive-strutturali.component.css']
})
export class DirettiveStrutturaliComponent {
  messaggi: string[] = ['Ciao', 'Buongiono', 'Buonasera'];
  cestino: string[] = [];

  eliminaMessaggio(indice: number): void {
    this.cestino.push(this.messaggi.splice(indice, 1)[0]);
  }

  aggiungiMessaggio(msg: HTMLInputElement): void {
    this.messaggi.push(msg.value);
  }

  ripristinaMessaggio(indice: number): void {
    this.messaggi.push(this.cestino.splice(indice, 1)[0]);
  }
}
