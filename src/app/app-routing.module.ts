import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HogeComponent } from './hoge/hoge.component';
import { ProfileComponent } from './profile/profile.component';
import { QuizComponent } from './quiz/quiz.component';
import { ShopDialogComponent } from './shop-dialog/shop-dialog.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path: 'shop', component: ShopComponent},
  {path: 'shop-dialog', component: ShopDialogComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'hoge', component:HogeComponent},
  {path: 'quiz', component:QuizComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
