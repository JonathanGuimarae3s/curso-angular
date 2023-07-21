import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name='Jonathan';
  userData={
    name:'teste',
    role:'admin'
  }
  title = 'curso-angular';
  classes =
  [
    'underline-title',
     'green-title',
     'small-title'
  ]
}
