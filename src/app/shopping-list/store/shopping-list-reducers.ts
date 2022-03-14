

import { Ingredients } from "src/app/ingredients/ingrediants_modal";
import * as shoppinglistactions from './shopping-list-actions'


const initialstate={
    ingredients :[
        new Ingredients("turmeric powder", 25),
        new Ingredients("turmeric powder", 25)
      ]
}
export function shoppingListReducers(state=initialstate,action:shoppinglistactions.AddIngredients){

switch(action.type){
    case shoppinglistactions.ADD_INGREDIENTS:
    return{
        ...state,
        ingredients:[...state.ingredients,action.payload]

    };
    default:
        return state;


}


}