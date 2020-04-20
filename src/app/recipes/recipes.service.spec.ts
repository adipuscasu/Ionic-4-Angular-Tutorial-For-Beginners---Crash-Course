import { TestBed } from '@angular/core/testing';

import { RecipesService } from './recipes.service';

describe('RecipesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipesService = TestBed.get(RecipesService);
    expect(service).toBeTruthy();
  });

  it('should have a getAllRecipes method', () => {
    const service: RecipesService = TestBed.get(RecipesService);
    expect(service.getAllRecipes).toBeTruthy();
  });

  it('getAllRecipes should be a function', () => {
    const service: RecipesService = TestBed.get(RecipesService);
    expect(typeof (service.getAllRecipes) === 'function').toBeTruthy();
  });

  it('should have a getRecipe function', () => {
    const service: RecipesService = TestBed.get(RecipesService);
    expect(service.getRecipe && typeof (service.getRecipe) === 'function').toBeTruthy();
  });

});
