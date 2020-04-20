import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://previews.123rf.com/images/danifoto/danifoto1601/danifoto160100238/51680681-wiener-schnitzel.jpg',
      ingredients: ['French fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://www.shutterstock.com/image-photo/tasty-appetizing-classic-italian-spaghetti-pasta-1119580967',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ];
  constructor() { }
}
