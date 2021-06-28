import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
  {
      path: 'AboutMe',
      loadChildren: () => import('./about-me/about-me.module').then(m => m.AboutMe)
     }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
