import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredients } from 'src/app/ingredients/ingrediants_modal';
import { Recipe } from 'src/app/recipe-modal';
import { recipeService } from '../recipes-service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  sendtodetail: Recipe
  id: number

  constructor(private recipeservice: recipeService,private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.sendtodetail = this.recipeservice.getRecipeForParams(this.id);
      }

    );
  }

  toShopping() {
    this.recipeservice.toShopList(this.sendtodetail.ingredients);
  }
  onDelete(){
    this.recipeservice.onDeleteRecipe(this.id);
    this.router.navigate(['/recipes'])

  }

  navigate(){
  this.router.navigate(['edit'],{relativeTo:this.route});
  }

}
