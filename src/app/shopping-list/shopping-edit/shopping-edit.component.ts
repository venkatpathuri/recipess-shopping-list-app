import { Component, ElementRef, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Ingredients } from 'src/app/ingredients/ingrediants_modal';
import { shoppinglist } from '../shopping-list-service';
import { NgForm } from '@angular/forms'
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('name') namefield: ElementRef
  @ViewChild('amount') amountfield: ElementRef
  @ViewChild('ref') valref: NgForm
  // @Output() ingredient=new EventEmitter<Ingredients>()
  constructor(private shoppinglist: shoppinglist,private store:Store<{shoppinglist:{ingredients:Ingredients[]}}>) {

  }

  subscription: Subscription;
  editmodel = false;
  editlistindex: number;
  editedItem: Ingredients
  ngOnInit(): void {
    this.subscription = this.shoppinglist.oneditlist.subscribe((index: number) => {
      this.editlistindex = index;
      this.editmodel = true;
      this.editedItem = this.shoppinglist.getEditedItem(index);
      this.valref.setValue({

        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });

  }
  addIngredients(form: NgForm) {
    const value = form.value;

    const fields = new Ingredients(value.name, value.amount);
    if (this.editmodel) {

      this.shoppinglist.updateEditItem(this.editlistindex, fields)
    }
    else {
      this.shoppinglist.receiveIngredients(fields);

      //adding ingredients via ngrx store
      // this.store.dispatch(new shoppinglistactions.AddIngredients(fields));
    }
    this.editmodel = false;
    form.reset();
  }
  onClear() {
    this.valref.reset();
    this.editmodel=false;
  }
  onDelete(editlistindex){
    this.shoppinglist.deleteItem(editlistindex);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
