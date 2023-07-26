import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent {
  myNumber = '';
  onChangeNumber() {

    this.myNumber = (Math.random() * 11).toFixed();
  }
}
