import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/_navigation-bar/navigation-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule} from '@angular/material/icon';
import { LandingComponent } from './landing/landing.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SearchComponent } from './search/search.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';






// Shared module holds everything that will be used by all the modules 
// To be able to use modules, make sure you export them 
// To use components add them to declarations then export ( so they can be recognized by other modules )


@NgModule({
  declarations: [

    NavigationBarComponent,
    FooterComponent,
    LandingComponent,
    SearchComponent,
    ContactComponent,
    AboutComponent,
    
    
    

  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    
   
  ],
  exports:[
    NavigationBarComponent,
    FooterComponent,
    MatGridListModule,
    MatIconModule,
    LandingComponent,
    MatButtonModule,
    MatToolbarModule,
    SearchComponent,
    ContactComponent,
    

  ]
})
export class SharedModule { }
