import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-out-child',
  templateUrl: './out-child.component.html',
  styleUrls: ['./out-child.component.css']
})
export class OutChildComponent {

  @Output() avvisoMessaggio = new EventEmitter<string>();
  @Input() messaggioDaModificare! : string;

  aggiungiMessaggio(msg: HTMLInputElement): void {
    this.avvisoMessaggio.emit(msg.value);
  }
}
