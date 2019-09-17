import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.css']
})
export class ListPokemonsComponent implements OnInit {

  @Input() name?: string;
  @Input() url?: string;

  constructor() { }

  ngOnInit() {
  }

}
