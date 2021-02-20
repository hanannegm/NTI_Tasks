import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { PlaygroundComponent } from './playground/playground.component';
//import { DiractiveExampleComponent } from './diractive-example/diractive-example.component';
import { PostTaskComponent } from './post-task/post-task.component';

@NgModule({
  declarations: [
    AppComponent,
    //PlaygroundComponent,
    //DiractiveExampleComponent
    PostTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
