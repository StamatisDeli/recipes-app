import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test',
      'A description test',
      'https://www.seriouseats.com/2019/07/20190618-grilled-turkish-chicken-wings-vicky-wasik-13.jpg'
    ),
    new Recipe(
      'Another Test',
      'A description test',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/02/caponata-pasta.jpg?itok=oyipDvVn'
    )
  ];

  @Output() emitRecipe = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit() {}

  toRecipeDetail(recipe: Recipe) {
    // console.log('click', recipe);
    this.emitRecipe.emit(recipe);
  }
}
