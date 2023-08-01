import { Component } from '@angular/core';
import { Animal } from 'src/app/Animals';
import { ListService } from 'src/app/services/list.service';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animalsDetails = '';
  animals: Animal[] = [

  ]
  showAge(animal: Animal): void {

    this.animalsDetails = `o pet ${animal.name} tem ${animal.age} anos`;


  }
  constructor(private listService: ListService) {
    this.getAnimal();
  }

  removeAnimal(animal: Animal) {
    console.log("removendo animal");

    this.animals = this.animals.filter((a) => animal.name !== a.name);
    this.listService.remove(animal.id).subscribe();

  }
  getAnimal(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
    //aqui puxamos todos os dadods da api e jogamos ele
    //no atributo/variavel
  }

}
