import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GroupComponent } from './group.component';
import { GroupCardComponent } from './group-card/group-card.component';


const routes: Routes = [
  { path: 'group/find', component: GroupComponent },
  { path: 'group/:id', component: GroupComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [GroupComponent, GroupCardComponent]
})
export class GroupModule { }
