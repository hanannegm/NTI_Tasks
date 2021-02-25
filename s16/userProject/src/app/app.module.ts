import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { FormbuilderxComponent } from './formbuilderx/formbuilderx.component';
import { RegisterComponent } from './register2/register2.component';
import { ReactiveExampleComponent } from './reactive-example/reactive-example.component';
import { Playground2Component } from './playground2/playground2.component'

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    FormbuilderxComponent,
    RegisterComponent,
    ReactiveExampleComponent,
    Playground2Component
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