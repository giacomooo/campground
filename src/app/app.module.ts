import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyMenuComponent } from './my-menu/my-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule} from './material/material.module';
import { MaphilightModule } from 'ng-maphilight';
import { CampgroundComponent } from './campground/campground.component'
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    MyMenuComponent,
    CampgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MaphilightModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
