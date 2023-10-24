import { Component } from '@angular/core';
import { DepInjService } from '../dep-inj.service';

@Component({
  selector: 'app-dep-inj-form',
  templateUrl: './dep-inj-form.component.html',
  styleUrls: ['./dep-inj-form.component.css']
})
export class DepInjFormComponent {

  constructor(private depService: DepInjService) {}

  salvaMessaggio(input: HTMLInputElement): void {
    this.depService.add(input.value);
  }

}
