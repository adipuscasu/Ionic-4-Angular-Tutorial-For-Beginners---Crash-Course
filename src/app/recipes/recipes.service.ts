import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://previews.123rf.com/images/danifoto/danifoto1601/danifoto160100238/51680681-wiener-schnitzel.jpg',
      ingredients: ['French fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://image.shutterstock.com/image-photo/spaghetti-bolognese-on-white-plate-260nw-639155776.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ];
  constructor() { }

  public getAllRecipes(): Array<Recipe> {
    return [...this.recipes];
  }

  public getRecipe(recipeId: string): Recipe {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  public deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
