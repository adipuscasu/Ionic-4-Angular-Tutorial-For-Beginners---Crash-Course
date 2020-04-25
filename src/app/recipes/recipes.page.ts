import { Component, OnInit, DoCheck } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, DoCheck {
  public recipes: Array<Recipe> = [];
  constructor(
    private readonly recipesService: RecipesService,
  ) {
  }
  ngDoCheck(): void {
    this.recipes = this.recipesService.getAllRecipes();
  }


  ngOnInit() {
    // not loading the recipes here because we're not reloading them
  }


}
