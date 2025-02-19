import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries-routing.module'; // Importamos el módulo de rutas hijas

@NgModule({
  imports: [
    CommonModule,
    CountriesRoutingModule // Rutas hijas de Countries
  ],
  declarations: [
    // Aquí van los componentes de CountriesModule como ByCapitalPageComponent, ByCountryPageComponent, etc.
  ]
})
export class CountriesModule { }
