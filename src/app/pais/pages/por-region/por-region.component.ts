import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles:[
    `
    button{
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent implements OnInit {

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }

  regiones:string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC']
  regionActiva:string = '';
  paises:Country[] = [];

  getClase(region:string):string{
    return (region == this.regionActiva) ? 'btn-primary' : 'btn-outline-primary'
  }

  activarRegion(region:string){
    if(region === this.regionActiva ) return;
    this.regionActiva = region;
    this.paises = [];
    this.paisService.getPorRegion( this.regionActiva )
        .subscribe( paises=> this.paises = paises )
  }

}
