import { drinkService }   from '../services';

const state = {
  selectedDrink:  {},
  drinks:         {} 
}

const mutations = {
  storeSelectedDrink(state, drink) {
    state.selectedDrink = drink;
  },
  storeDrinks(state, drinks) {
    state.drinks = drinks;
  }
}

const actions = {
  async fetchDrinks(context) {
    let isAlreadyStored = (Object.entries(context.state.drinks).length !== 0);

    if (!isAlreadyStored) {
      let resp = drinkService.getAllDrinks();
     
      context.commit("storeDrinks", resp);
    }

    return context.getters.drinks;
  }
}

const getters = {
  selectedDrink: (state) => {
    return state.selectedDrink;
  },
  drinks: (state) => {
    return state.drinks;
  }
}

export const drinks = {
  state,
  mutations,
  actions,
  getters
}