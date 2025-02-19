import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { CountriesModule } from './countries/countries.module';
import { AppRoutingModule } from './shared/app-routing.module';
import { AppComponent } from './app.component';
import { ByCapitalPageComponent } from './countries/pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './countries/pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './countries/pages/by-region-page/by-region-page.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    CountriesModule,
    AppRoutingModule
  ],
})
export class AppModule {}
