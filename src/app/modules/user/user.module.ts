import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { UserInfoComponent } from 'src/app/user-info/user-info.component';
import { UserComponent } from 'src/app/user/user.component';

const route: Route[] = [
  { path: '', component: UserComponent },
  { path: ':id', component: UserInfoComponent },
]

@NgModule({
  declarations: [
    UserComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class UserModule { }
