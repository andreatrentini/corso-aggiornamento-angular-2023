import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  messaggi: string[] = ['primo', 'secondo', 'terzo'];
  messaggioDaModificare: string = '';

  aggiungiMessaggio(messaggio: string): void {
    this.messaggi.push(messaggio);
  }

  modificaMessaggio(indice: number): void {
    this.messaggioDaModificare = this.messaggi[indice];
  }
}
