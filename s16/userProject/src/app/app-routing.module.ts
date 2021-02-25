import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { Playground2Component } from './playground2/Playground2.component';
import { RegisterComponent } from './register2/register2.component';



const routes: Routes = [
  {path:"", component:ParentComponent},
  {path:"test", component:Playground2Component},

  {path:"register", component:RegisterComponent},
  // {path:"reactive", component:ReactiveExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }