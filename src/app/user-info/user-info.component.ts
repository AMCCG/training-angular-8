import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  public userInfo:User =new User()

  constructor(
    public activedRoute: ActivatedRoute,
    public userService: UserService
  ) { }

  ngOnInit() {
    this.activedRoute.params.subscribe(res => {
      console.error("activedRoute ", res)
      this.userInfo = this.userService.getUserByID(res['id'])
      console.error(this.userInfo)

    })
  }

}
