import drinksDB from '@/assets/drinks.json';

export const drinkService = {
  getAllDrinks
};

function getAllDrinks() {
  return drinksDB.drinks;
}