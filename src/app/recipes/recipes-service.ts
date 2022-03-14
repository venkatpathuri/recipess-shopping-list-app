import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredients } from "../ingredients/ingrediants_modal";
import { Recipe } from "../recipe-modal";
import { shoppinglist } from "../shopping-list/shopping-list-service";

@Injectable()
export class recipeService {
  // sendItem = new EventEmitter<Recipe>();



  recipeChanged = new Subject<Recipe[]>()

  private recipes: Recipe[] = [
    new Recipe("Biryani", "Hyderabad Biryani", "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe-500x375.jpg",
      [
        new Ingredients("masala", 1),
        new Ingredients("salt", 2)
      ]

    ),
    new Recipe("Chicken", "Chicken with rice", "https://www.kitchensanctuary.com/wp-content/uploads/2020/08/Easy-Chicken-Curry-square-FS-117.jpg",
      [
        new Ingredients("rice", 1),
        new Ingredients("lemon", 2)
      ]
    )
  ]

  constructor(private shoppinglist: shoppinglist) { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
 
    this.recipeChanged.next(this.recipes.slice());
  
  }

  getRecipe() {
    return this.recipes.slice();
  }
 

  getRecipeForParams(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {

    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());


  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipeChanged.next(this.recipes.slice());

  }

  toShopList(ingredient: Ingredients[]) {
    this.shoppinglist.reciveIngredientsFromDetails(ingredient)
  }

  onDeleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

}

