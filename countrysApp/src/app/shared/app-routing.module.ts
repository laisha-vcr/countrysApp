import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./pages/homePage/homePage.component";
import { AboutComponent } from "./pages/about/about.component";


const routes: Routes =[
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }

]
@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}