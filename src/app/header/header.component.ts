import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserService } from '../auth/authser.service';
import { Recipe } from '../recipe-modal';
import { dataStorage } from '../recipes/Datastorage-service';
import { recipeService } from '../recipes/recipes-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  isLoggedIn=false;
  constructor(private res:dataStorage,private rec:recipeService,private auth:AuthserService,private route:Router) { }

  ngOnInit(): void {
    this.auth.user.subscribe((res)=>{
      this.isLoggedIn=!res?false:true;
    })
  }

  putRecipe(){
    this.res.putRecipes();
  }
  getRecipe(){
    this.res.getRecipes();
  

  }
  logOut(){
    this.auth.userLogOut();
    this.route.navigate(['/auth'])
  }


}
