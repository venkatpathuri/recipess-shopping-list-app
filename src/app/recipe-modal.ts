import { Ingredients } from "./ingredients/ingrediants_modal";

export class Recipe {

    name: string;
    description: string;
    imagepath: string;
    ingredients:Ingredients[];

    constructor(name: string, desc: string, imagepath: string,ingredients:Ingredients[]) {
    this.name=name;
    this.description=desc;
    this.imagepath=imagepath;
    this.ingredients=ingredients;
    }
}