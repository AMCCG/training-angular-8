import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public loginService: LoginService,
  ) { }

  ngOnInit() {
  }

  public signIn(): void {
    this.loginService.login().subscribe(resposne => {
      console.debug("LoginComponent", resposne)
    }, error => {
      console.error("Error errrorr eroroor", error)
    }, () => {
      console.debug("success")
    })
  }

}
