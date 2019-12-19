import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReservationComponent } from './reservation/reservation.component';
import { CampgroundComponent } from './campground/campground.component';
import { CampOverviewComponent } from './campOverview/campOverview.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent },
  {path: 'login', component: LoginComponent },
  {path: 'reservation', component: ReservationComponent },
  {path: 'campOverview', redirectTo: '/reservation' },
  {path: 'campground', redirectTo: '/reservation' },

  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

