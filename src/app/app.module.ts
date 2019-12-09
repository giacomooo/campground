import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyMenuComponent } from './my-menu/my-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule} from './material/material.module';
import { MaphilightModule } from 'ng-maphilight';
import { CampgroundComponent } from './campground/campground.component';
import { MatSliderModule } from '@angular/material/slider';
import { RouterModule, Routes } from '@angular/router';
import { CampOverviewComponent } from './campOverview/campOverview.component';

const appRoutes: Routes = [
  { path: 'campground', component: CampgroundComponent },
  { path: 'campoverview', component: CampOverviewComponent },
  /*
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  }, */
  { path: '',
    redirectTo: '/campground',
    pathMatch: 'full'
  },
  { path: '**', component: CampgroundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MyMenuComponent,
    CampgroundComponent,
    CampOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MaphilightModule,
    MatSliderModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
        )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
