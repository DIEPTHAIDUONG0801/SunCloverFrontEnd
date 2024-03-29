import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./components/admin/admin.component";
import {LoginComponent} from "./pages/login/login.component";

const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  // {
  //   path: 'admin',
  //   // canActivate: [canLoadAdmin],
  //   component: AdminComponent,
  //   loadChildren: () => import('./components/admin/admin.module').then((m) => m.AdminModule),
  //   data: { breadcrumb: 'Home' }
  // },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
