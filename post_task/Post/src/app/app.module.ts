import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { PlaygroundComponent } from './playground/playground.component';
//import { DiractiveExampleComponent } from './diractive-example/diractive-example.component';
//import { PostTaskComponent } from './post-task/post-task.component';
import { AllDataComponent } from './all-data/all-data.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AlluserComponent } from './pages/alluser/alluser.component';
import { UserFormComponent } from './pages/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    //PlaygroundComponent,
    //DiractiveExampleComponent
    //PostTaskComponent,
    AllDataComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    AlluserComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
