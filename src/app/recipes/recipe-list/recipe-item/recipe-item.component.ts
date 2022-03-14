import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/recipe-modal';
import { recipeService } from '../../recipes-service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe
  @Input() index:number;
  // @Output() sendItem=new EventEmitter<void>();
  constructor(private recipeservice:recipeService) { }

  ngOnInit(): void {
  }
  // sendItems(){
  // // this.sendItem.emit();
  // this.recipeservice.sendItem.emit(this.recipe);
  // }
 
  
}
