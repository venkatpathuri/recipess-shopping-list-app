import { Action } from "@ngrx/store";
import { Ingredients } from "src/app/ingredients/ingrediants_modal";

export const ADD_INGREDIENTS='ADD_INGREDIENTS'

export class AddIngredients implements Action{
   readonly type =ADD_INGREDIENTS;
   
constructor(public payload:Ingredients[]){

}
    
}