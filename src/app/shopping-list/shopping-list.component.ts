import { Component, OnInit, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  // TODO: add item from recipe details dropdown menu
  emitIngredient = new EventEmitter<Ingredient>();

  constructor(private sLService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.sLService.getIngredients();
    this.sLService.ingredientUpdated.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }
}
