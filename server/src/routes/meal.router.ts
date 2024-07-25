import express from 'express';
import { MealController } from '../controllers/meal.controllers';

const mealRouter=express.Router();

mealRouter.get("/", MealController.getAll)
mealRouter.get("/:id", MealController.getMeal)
mealRouter.post("/", MealController.insert)
mealRouter.put("/", MealController.update)
mealRouter.delete("/:id", MealController.delete)

export {mealRouter};