import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Ingredients } from '../ingredients/ingrediants_modal';
import { shoppinglist } from './shopping-list-service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients: Ingredients[];
  // ingredients:Observable<{ingredients:Ingredients[]}> refer for ngrx store concept
  private subscription:Subscription
  private store:Store <{shoppinglist:{ingredients:Ingredients[]}}>
  constructor(private shoppinglist: shoppinglist) { }
  

  ngOnInit(): void {
    //  this.ingredients=this.store.select('shoppinglist')
    this.ingredients = this.shoppinglist.getIngredients()
   this.subscription= this.shoppinglist.ingredientschangedproperty.subscribe((ingredients: Ingredients[]) => {
     this.ingredients = ingredients
   });

  }

  onEdit(index:number){
  this.shoppinglist.oneditlist.next(index)
  }
  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }

}
