import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  toRecipeDetail: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.recipeEmmiter.subscribe((recipe: Recipe) => {
      this.toRecipeDetail = recipe;
    });
  }

  getRecipes(recipe) {
    this.toRecipeDetail = recipe;
  }
}
