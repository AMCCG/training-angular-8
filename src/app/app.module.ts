import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { FooterComponent } from './footer/footer.component';
import { HeraderComponent } from './herader/herader.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RouteModule } from './route/route.module';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeraderComponent,
    LoginComponent,
    UserComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouteModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
