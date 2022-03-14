import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes.component";

const Reciperoutes: Routes = [

    {
      path: '', component: RecipesComponent,
      // canActivate:[GuardService],-- used as route guard
      children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent },
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent }
      ]
    },
   
  ]
  
  @NgModule({
    imports: [RouterModule.forChild(Reciperoutes)],
    exports: [RouterModule]
  })
  export class RecipesRoutingModule {
  
  
  }