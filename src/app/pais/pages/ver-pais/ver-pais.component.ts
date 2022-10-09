import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activedRoute:ActivatedRoute,
    private paiseService:PaisService
  ) { }

  ngOnInit(): void {

    this.activedRoute.params
    .pipe(
      switchMap( ({ id }) => this.paiseService.getPaisPorCodigo( id ) ),
      tap()
    )
    .subscribe( pais  => this.pais = pais );
  }
}