import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meal } from '../models/meal';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private http:HttpClient) { }

  public getMeals(){
    return this.http.get<Meal[]>('http://localhost:5000/meal/');
  }

  public getMeal(id:number) {
    return this.http.get<Meal>('http://localhost:5000/meal/'+id);
  }

  public addMeal(meal:Meal){
    return this.http.post('http://localhost:5000/meal/', meal);
  }

  public updateMeal(meal:Meal){
    return this.http.put('http://localhost:5000/meal/', meal);
  }

  public deleteMeal(id:number){
    return this.http.delete('http://localhost:5000/meal/'+id);
  }
}


