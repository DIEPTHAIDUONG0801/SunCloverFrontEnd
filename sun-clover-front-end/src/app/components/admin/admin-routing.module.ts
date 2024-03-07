import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { canActivate } from '@helpers/auth.guard';
import { HomeComponent } from '../../pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    // canActivate: [canActivate],
  },
  // { path: 'home', component: HomeComponent, canActivate: [canActivate] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }

