import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent implements OnInit {

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }

  termino:string = "";
  error:boolean = false;
  paises:Country[] = [];
  mostrarSugerencias: boolean = false;
  paisesSugerencias: Country[] = [];

  buscar(termino:string){
    this.error = false;
    this.termino = termino;
    this.paisService.buscarPorCapital(this.termino)
      .subscribe( (paises) => {
        this.paises = paises
      }, (err) => {
        this.error = true;
        this.paises = [];
      });
  }

  sugerencias(termino:string){
    this.error = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPorCapital(termino)
      .subscribe(
        paises => this.paisesSugerencias = paises.splice(0, 5),
        err => this.paisesSugerencias = []
      );
  }

  buscarSugerido(){
    this.buscar(this.termino);
    this.mostrarSugerencias = false;
  }

}
