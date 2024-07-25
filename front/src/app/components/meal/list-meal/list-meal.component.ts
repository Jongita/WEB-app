import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meal } from '../../../models/meal';
import { MealService } from '../../../services/meal.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-meal',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './list-meal.component.html',
  styleUrl: './list-meal.component.css'
})
export class ListMealComponent {
  public meals: Meal[]=[];

  private loadMeals(){
  this.mealService.getMeals().subscribe((data)=>{
    this.meals=data;
    });
  }

  constructor (private mealService:MealService){
    this.loadMeals();
  }

  public deleteMeal(id:number){
    this.mealService.deleteMeal(id).subscribe((data)=>{
      this.loadMeals();
    })
  }

}


