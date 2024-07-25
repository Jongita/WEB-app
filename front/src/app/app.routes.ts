import { Routes } from '@angular/router';
import { ListMealComponent } from './components/meal/list-meal/list-meal.component';
import { NewMealComponent } from './components/meal/new-meal/new-meal.component';
import { UpdateMealComponent } from './components/meal/update-meal/update-meal.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { LoginComponent } from './components/auth/login/login.component';

export const routes: Routes = [
    {path:"meal/list", component:ListMealComponent},
    {path:"meal/new", component:NewMealComponent},
    {path:"meal/:id", component:UpdateMealComponent},

    {path: "auth/signin", component:SigninComponent},
    {path: "auth/login", component:LoginComponent},


];
