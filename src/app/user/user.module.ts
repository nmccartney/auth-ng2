import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserViewComponent } from './user-view/user-view.component';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { UserFindComponent } from './user-find/user-find.component';
import { UserCardComponent } from './user-card/user-card.component';

const routes: Routes = [
  { path: 'user/find', component: UserFindComponent },
  { path: 'user/:id', component: UserViewComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [UserViewComponent, UserFindComponent, UserCardComponent]
})
export class UserModule { }
