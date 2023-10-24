import { Component } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-log-emitter',
  templateUrl: './log-emitter.component.html',
  styleUrls: ['./log-emitter.component.css']
})
export class LogEmitterComponent {
  constructor(private logService: LogService) {}

  inviaLog(inputMessaggio: HTMLInputElement): void {
    this.logService.log({dataora: new Date(), messaggio: inputMessaggio.value})
  }

}
