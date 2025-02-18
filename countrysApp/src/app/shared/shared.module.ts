import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/homePage/homePage.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
   HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class SharedModule { }
