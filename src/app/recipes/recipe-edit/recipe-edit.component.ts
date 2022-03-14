import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { recipeService } from '../recipes-service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Recipe } from 'src/app/recipe-modal';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number
  editMode = false;
  groupRecipes: FormGroup;
  constructor(private route: ActivatedRoute, private recipeservice: recipeService, private routes: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.inItForm();
    })

  }
  onSubmit() {

    if (this.editMode) {
      this.recipeservice.updateRecipe(this.id, this.groupRecipes.value)
    }
    else {
      this.recipeservice.addRecipe(this.groupRecipes.value)
    }
     this.clear();
  }

  inItForm() {
    let recipename = '',
      image = '',
      description = ''
    const ingredientsarray = new FormArray([]);
    if (this.editMode) {
      const recipe = this.recipeservice.getRecipeForParams(this.id);
      recipename = recipe.name;
      image = recipe.imagepath;
      description = recipe.description;

      if (recipe['ingredients']) {
        for (let ing of recipe.ingredients) {

          ingredientsarray.push(
            new FormGroup({
              'name': new FormControl(ing.name, Validators.required),
              'amount': new FormControl(ing.amount, [Validators.required,
              Validators.pattern(/^[1-9][0-9]+$/)])

            })
          );
        }

      }


    }


    this.groupRecipes = new FormGroup({
      'name': new FormControl(recipename, Validators.required),
      'imagepath': new FormControl(image),
      'description': new FormControl(description, Validators.required),
      'ingredient': ingredientsarray
    })


  }
  addNewIngredient() {
    (<FormArray>this.groupRecipes.get('ingredient')).push(
      new FormGroup({
        'name': new FormControl(),
        'amount': new FormControl()
      })

    )
  }
  clear() {
    this.routes.navigate(['../']);
   }
   deleteIngredients(index:number){
     (<FormArray> this.groupRecipes.get('ingredient')).removeAt(index);

   }
  get controls() { // a getter!
    return (<FormArray>this.groupRecipes.get('ingredient')).controls;
  }



}


