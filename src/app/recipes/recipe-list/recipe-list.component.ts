import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/app/recipe-modal';
import { recipeService } from '../recipes-service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[];
  subscription: Subscription
  // @Output() listitem = new EventEmitter<Recipe>()
  constructor(private recser: recipeService, private route: Router, private router: ActivatedRoute) { }


  ngOnInit(): void {
    this.subscription = this.recser.recipeChanged.subscribe((recipe: Recipe[]) => {
      this.recipes = recipe;
    })
    this.recipes = this.recser.getRecipe();
  }
  // reciveItems(recipe: Recipe) {
  //   this.listitem.emit(recipe)
  // }
  navigate() {

    this.route.navigate(['new'], { relativeTo: this.router });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
