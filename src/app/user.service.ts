import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {

  private users: User[] = [
    { id: 1, username: 'Apisit.A', age: 25, sex: 'M' },
    { id: 2, username: 'Apisit.B', age: 30, sex: 'F' },
    { id: 3, username: 'Apisit.C', age: 40, sex: 'M' },
    { id: 4, username: 'Apisit.D', age: 30, sex: 'F' },
    { id: 5, username: 'Apisit.E', age: 18, sex: 'M' },
    { id: 6, username: 'Apisit.F', age: 50, sex: 'F' },
    { id: 7, username: 'Apisit.G', age: 43, sex: 'M' },
    { id: 8, username: 'Apisit.H', age: 35, sex: 'F' },
    { id: 9, username: 'Apisit.I', age: 40, sex: 'M' },
    { id: 10, username: 'Apisit.J', age: 27, sex: 'F' },
  ]

  constructor() { }

  public getUser(): User[] {
    return this.users
  }

  public getPicture(sex: string, age: number): string {
    if (sex == 'M') {
      if (age > 30)
        return "./assets/picture/svg/old man.svg"
      else
        return "./assets/picture/svg/man.svg"
    }
    else
      if (age > 30)
        return "./assets/picture/svg/woman.svg"
      else
        return "./assets/picture/svg/girl.svg"
  }

  public getUserByID(id: any): User {
    return this.users.filter(user => user.id == id)[0]
  }
}
