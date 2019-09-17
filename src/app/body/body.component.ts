import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../api.service';
import { Pokemons } from '../shared/models/pokemons';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: [ApiService]
})
export class BodyComponent implements OnInit, OnDestroy {

  dadosAPI: Pokemons;
  error = '';
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getUsuarios().subscribe(  (retorno : Pokemons)  => {
      this.dadosAPI = retorno;
    }, (error) => {
      this.dadosAPI = {};
      this.error = 'Erro na API';
    });
  }
  ngOnDestroy(): void {
    this.dadosAPI = {
      data:[]
    } ;
  }
}
