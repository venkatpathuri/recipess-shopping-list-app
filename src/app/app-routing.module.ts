import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },

  // { path: 'auth', loadChildren: () => import('./auth/auth.module').then(res => res.AuthModule) },
  { path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(res => res.RecipesModule) },
  { path: 'shopping-list', loadChildren: () => import('./shopping-list/shoppinglist.module').then(res => res.shoppingListModule) },
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
