import {Pokemon} from './pokemon';

export interface Pokemons {
  page ?: number;
  per_page ?: number;
  total ?: number;
  total_pages ?: number;
  data ?: Array<Pokemon>;
}