import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';

// Rutas hijas para el módulo Countries
const routes: Routes = [
  {
    path: 'by-capital',
    component: ByCapitalPageComponent
  },
  {
    path: 'by-country',
    component: ByCountryPageComponent
  },
  {
    path: 'by/:id',
    component: ByCountryPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes) // Importa RouterModule.forChild para rutas hijas
  ],
  exports: [
    RouterModule
  ]
})
export class CountriesRoutingModule { }
