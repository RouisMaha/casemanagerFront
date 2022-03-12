
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LandingComponent } from './_shared/landing/landing.component';
import { SearchComponent } from './_shared/search/search.component';
import { ContactComponent } from './_shared/components/contact/contact.component';
import {AboutComponent} from  './_shared/components/about/about.component';





const routes: Routes = [

  {
    // if the URL path is /main then load everything in module Auth
    path: 'main',
    component: AuthComponent,
    // lazy loading
    loadChildren: () => import('./auth/auth.module').then(x => x.AuthModule)
  },



  {
    path: '',
    component: LandingComponent,
  },

 // {
    // new feature module 
     
    //path: 'search',

    //component: SearchComponent, 

    //a flat component ( e.g. auth.component) that has only 
    // <router-outlet></router-outlet>

    // lazy loading
    //loadChildren: () => import('./search/search.module').then(x => x.searchModule)
//},

//{
  //path: 'home',
  //component: SearchComponent,
//},

{
  path: 's',
  component: SearchComponent,
},
{
  path: 'c',
  component: ContactComponent,
},

{
  path: 'a',
  component: AboutComponent,
},


];



@NgModule({

  imports: [

    HttpClientModule,

    RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule { }