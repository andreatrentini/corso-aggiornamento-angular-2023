import { Component } from '@angular/core';
import { UtentiService } from '../utenti.service';

@Component({
  selector: 'app-tabella-utenti',
  templateUrl: './tabella-utenti.component.html',
  styleUrls: ['./tabella-utenti.component.css']
})
export class TabellaUtentiComponent {

  utenti!: any[];

  constructor(private utentiService: UtentiService) {}

  caricaDati(): void {
    this.utentiService.getUtenti().subscribe((dati) => {
      this.utenti = dati;
    });
  }

}
