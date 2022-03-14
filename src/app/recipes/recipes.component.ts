import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-modal';
import { recipeService } from './recipes-service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [recipeService]
})
export class RecipesComponent implements OnInit {

  recivelists: Recipe
  constructor(private recipeservice: recipeService) { }

  ngOnInit(): void {
    // this.recipeservice.sendItem.subscribe((recipe: Recipe) => {
    //   this.recivelists = recipe

    // })
  


  }



}
