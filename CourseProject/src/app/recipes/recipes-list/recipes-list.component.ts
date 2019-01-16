import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('First Recipe','This is test recipe.','https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_960_720.jpg'),
    new Recipe('Second Recipe','This is test recipe.','https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_960_720.jpg'),
    new Recipe('Third Recipe','This is test recipe.','https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_960_720.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
