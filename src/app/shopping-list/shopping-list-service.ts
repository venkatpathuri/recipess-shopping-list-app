
import { Subject } from "rxjs/internal/Subject"; 
import { Ingredients } from "../ingredients/ingrediants_modal";

export class shoppinglist {

  oneditlist=new Subject<number>();
  // ingredientschangedproperty = new EventEmitter<Ingredients[]>()
  ingredientschangedproperty = new Subject<Ingredients[]>()
  ingredients: Ingredients[] = [
    new Ingredients("turmeric powder", 25),
    new Ingredients("turmeric powder", 25)
  ]

  getIngredients() {
    return this.ingredients.slice()
  }

  getEditedItem(index:number){
    return this.ingredients[index];
  }

  receiveIngredients(data: any) {
    this.ingredients.push(data);
    this.ingredientschangedproperty.next(this.ingredients.slice());



  }

 updateEditItem(index:number,newingredient:Ingredients){
   this.ingredients[index]=newingredient;
   this.ingredientschangedproperty.next(this.ingredients.slice());

 }

  reciveIngredientsFromDetails(ingredients: Ingredients[]) {
    this.ingredients.push(...ingredients);
    this.ingredientschangedproperty.next(this.ingredients.slice());
  }
  
  deleteItem(index:number){
   this.ingredients.splice(index,1);
   this.ingredientschangedproperty.next(this.ingredients.slice());
  }


}