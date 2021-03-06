import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecipesPage } from './recipes.page';
import { RouterTestingModule } from '@angular/router/testing';

describe('RecipesPage', () => {
  let component: RecipesPage;
  let fixture: ComponentFixture<RecipesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesPage],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
