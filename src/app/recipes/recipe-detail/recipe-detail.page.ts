import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit, OnDestroy {
  private readonly subscription: Subscription = new Subscription();
  public recipe: Recipe;
  constructor(
    private readonly activatedRoud: ActivatedRoute,
    private readonly recipesService: RecipesService
  ) {
    this.recipe = null;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.loadRecipe();
  }
  private loadRecipe() {
    const paramsSubscription = this.activatedRoud.paramMap.subscribe(async paramMap => {
      if (!paramMap.get('recipeId')) {
        // redirect
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.recipe = this.recipesService.getRecipe(recipeId);
    });
    this.subscription.add(paramsSubscription);
  }
}
