import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
    private readonly recipesService: RecipesService,
    private readonly router: Router,
    private readonly alertCtrl: AlertController
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
  public onDeleteRecipe() {
    this.alertCtrl.create({
      header: 'Delete recipe confirmation', message: 'Are you sure?', buttons: [{
        text: 'Yes',
        handler: () => {
          this.deleteRecipe();
        }
      },
      {
        text: 'No',
        role: 'cancel'
      }]
    }).then((alertEl) => {

      alertEl.present();
    });
  }

  private deleteRecipe() {
    this.recipesService.deleteRecipe(this.recipe.id);
    this.router.navigate(['/recipes']);
  }
}
