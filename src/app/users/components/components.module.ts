import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LandinguserComponent } from './landinguser/landinguser.component';



@NgModule({
  declarations: [
    NavbarComponent,
    LandinguserComponent,
    LandinguserComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    NavbarComponent,
    LandinguserComponent,
  ],
  exports: [
    MatToolbarModule,
    NavbarComponent,
    LandinguserComponent,
  ]
})
export class ComponentsModule { }
