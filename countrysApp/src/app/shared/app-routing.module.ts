import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./pages/homePage/homePage.component";
import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { CountriesModule } from './../countries/countries.module'; // Asegúrate de importar el módulo

// Definimos las rutas principales
export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'countries',
    loadChildren: () => import('../countries/countries.module').then(m => m.CountriesModule) // Lazy load de Countries
  },
  {
    path: '**',
    redirectTo: 'home' // Redirección en caso de rutas no definidas
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), // Configuramos las rutas raíz
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
