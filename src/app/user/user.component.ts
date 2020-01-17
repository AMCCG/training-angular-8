import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public users: User[] = []

  constructor(
    public router: Router,
    public userService: UserService
  ) {
    console.error("constructor")
  }

  ngOnInit() {
    this.users = this.userService.getUser()
  }

  public getPicture(sex: string, age: number): string {
    return this.userService.getPicture(sex, age)
  }

  public remove(id: number): void {
    this.users = this.users.filter(user => user.id != id)
  }

  public viewDetail(id: number): void {
    console.error(id)
    this.router.navigate(['user/' + id])
  }

}
