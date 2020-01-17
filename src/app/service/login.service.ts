import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseModel } from '../response.model';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    public httpClient: HttpClient
  ) { }


  public login(): Observable<ResponseModel> {
    let body = {
      username: "admin",
      password: "password"
    }
    // return this.httpClient.post("http://192.168.0.214:8080/AppSpace/v1/callLogin", body)
    return this.httpClient.post("http://192.168.0.214:8080/AppSpace/v1/callLogin", body,{headers:{'name':'Hello'}}).pipe(map((res: ResponseModel) => {
      return res
    }))
  }
}
