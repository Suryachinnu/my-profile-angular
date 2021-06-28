import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyInfoComponent} from './my-info/my-info.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../_shared/shared.module';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/MyInfo'},
  {
    path: 'MyInfo',
    component: MyInfoComponent
  }
];

@NgModule({
  declarations: [
    MyInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AboutMe { }
