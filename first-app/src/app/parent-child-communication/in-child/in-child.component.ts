import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-in-child',
  templateUrl: './in-child.component.html',
  styleUrls: ['./in-child.component.css']
})
export class InChildComponent {
  @Input() messaggiRicevuti!: string[];
  @Output() avvisoModifica = new EventEmitter<number>();

  eliminaMessaggio(indice: number): void {
    this.messaggiRicevuti.splice(indice, 1);
  }

  modificaMessaggio(indice: number): void {
    this.avvisoModifica.emit(indice);
  }

}
