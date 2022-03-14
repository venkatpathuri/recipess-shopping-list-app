import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { shoppingListRouting } from "./shoppinglist-routing";

@NgModule({
declarations:[
    ShoppingListComponent,
    ShoppingEditComponent

],
imports:[
FormsModule,
shoppingListRouting,
CommonModule

],

})
export class shoppingListModule{



}