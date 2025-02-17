import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { CountriesModule } from './countries/countries.module';
import { AppRoutingModule } from './shared/app-routing.module';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    CountriesModule,
    AppRoutingModule
  ]
})
export class AppModule { }
