import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list.component";

const shoppingroutes: Routes = [

  
    { path: '', component: ShoppingListComponent },

  


]

@NgModule({
imports: [RouterModule.forChild(shoppingroutes)],
exports: [RouterModule]
})

export class shoppingListRouting{

}