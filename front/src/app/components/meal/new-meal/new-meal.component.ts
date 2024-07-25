import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MealService } from '../../../services/meal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-meal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-meal.component.html',
  styleUrl: './new-meal.component.css'
})
export class NewMealComponent {

  constructor (private mealService:MealService, private router:Router){}

  public mealSubmit(form:NgForm){
    console.log(form.form.value);
    this.mealService.addMeal(form.form.value).subscribe((data)=>{
      this.router.navigate(['meal', 'list']);
    })

}
}
