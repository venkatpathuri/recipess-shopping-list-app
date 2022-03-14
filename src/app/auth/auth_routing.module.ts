import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";

const authroutes: Routes = [

  
        { path: 'auth', component: AuthComponent }
    
      
    
   
  ]
  
  @NgModule({
    imports: [RouterModule.forChild(authroutes)],
    exports: [RouterModule]
  })

export class AuthRouting{

}