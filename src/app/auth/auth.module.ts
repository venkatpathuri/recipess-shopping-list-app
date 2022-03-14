import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";


import { AuthComponent } from "./auth.component";
import { AuthRouting } from "./auth_routing.module";

@NgModule({

declarations:[
    AuthComponent
],
imports:[
    CommonModule,
    FormsModule,
    AuthRouting
  
]


})
export class AuthModule{

}