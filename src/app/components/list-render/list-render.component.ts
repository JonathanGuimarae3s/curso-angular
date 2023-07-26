import { Component } from '@angular/core';
import { Animal } from 'src/app/Animals';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animalsDetails = '';
  animals: Animal[] = [
    { name: 'turca', type: 'dog', age: 4 },
    { name: 'tom', type: 'cat', age: 4 },
    { name: 'frida', type: 'dog', age: 4 },
    { name: 'bob', type: 'horse', age: 4 },
  ]
  showAge(animal: Animal): void {

    this.animalsDetails = `o pet ${animal.name} tem ${animal.age} anos`;


  }



}
