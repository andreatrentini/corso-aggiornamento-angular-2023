import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-event-binding',
  templateUrl: './data-event-binding.component.html',
  styleUrls: ['./data-event-binding.component.css']
})
export class DataEventBindingComponent implements OnInit {
  nome: string = 'Andrea';
  colore: string = 'Red';

  nrStudenti: number = 20;
  coloreStudenti: string = 'Blue';
  timer: any;

  nomeClasse: string = '5Bi';

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.nrStudenti--;
      if (this.nrStudenti < 10) {
        this.coloreStudenti = 'Red';
      }
      if (this.nrStudenti <= 0) {
        clearInterval(this.timer);
      }
    }, 1000)
  }

  azzera(): void {
    clearInterval(this.timer);
    this.nrStudenti = 20;
    this.coloreStudenti = 'Blue';

    this.timer = setInterval(() => {
      this.nrStudenti--;
      if (this.nrStudenti < 10) {
        this.coloreStudenti = 'Red';
      }
      if (this.nrStudenti <= 0) {
        clearInterval(this.timer);
      }
    }, 1000)
  }
}
