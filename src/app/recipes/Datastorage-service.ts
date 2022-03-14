import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Recipe } from "../recipe-modal";
import { recipeService } from "./recipes-service";

@Injectable()
export class dataStorage{

constructor(private http:HttpClient,private rec:recipeService){

}

putRecipes(){
    const recipes=this.rec.getRecipe();
    this.http.put('https://recipe-shopping-8461a-default-rtdb.firebaseio.com/recipes.json',recipes).subscribe((res)=>{
        console.log(res);
    })
}

getRecipes(){
    this.http.get<Recipe[]>('https://recipe-shopping-8461a-default-rtdb.firebaseio.com/recipes.json')
    .pipe(map(recipes=>{
        return recipes.map(recipes=>{
            return {... recipes, ingredients:recipes.ingredients ? recipes.ingredients : []}
        })
    }))
    .subscribe((res)=>{
        this.rec.setRecipes(res);
    })
}
}

