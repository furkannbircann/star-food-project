import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateOrderPageComponent } from './pages/create-order-page/create-order-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'orderlist',
  },
  {
    path: 'orderlist',
    component: HomeComponent,
  },
  {
    path: 'createorder',
    component: CreateOrderPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
