import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirectiveDirective } from './ingredients/dropdown-directive.directive';
import { shoppinglist } from './shopping-list/shopping-list-service';

import { recipeService } from './recipes/recipes-service';
import { HttpClientModule } from '@angular/common/http';
import { dataStorage } from './recipes/Datastorage-service';

import { AuthserService } from './auth/authser.service';
import { LoadspinComponent } from './loadspin/loadspin.component';
import { StoreModule } from '@ngrx/store';

import { AuthModule } from './auth/auth.module';
import { shoppingListReducers } from './shopping-list/store/shopping-list-reducers';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,


    DropdownDirectiveDirective,


    LoadspinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ shoppinglist: shoppingListReducers }),

    AuthModule


  ],

  providers: [shoppinglist, recipeService, dataStorage, AuthserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
