import { tabService } from "@/services/tab.service";

const state = {
  selectedTab: {},
  status: {}
}

const mutations = {
  storeTab(state, tab) {
    state.selectedTab = tab;
  },
  addDrinkSuccess(state, tab) {
    state.selectedTab = tab;
    state.status = { success: true }
  },
  addRoundSuccess(state, tab) {
    state.selectedTab = tab;
    state.status = { success: true }
  },
  closeTabSuccess(state, tab) {
    state.selectedTab = tab;
    state.status = { success: true }
  }
}

const actions = {
  fetchTab(context) {
    let resp = tabService.viewTab();

    context.commit('storeTab', resp);
    return context.getters.selectedTab;
  },
  addDrink(context, drink) {
    tabService.addDrink(drink);

    let resp = tabService.viewTab();
    context.commit('addDrinkSuccess', resp);
    return context.getters.selectedTab;
  },
  addRound(context, round) {
    tabService.addRound(round);

    let resp = tabService.viewTab();
    context.commit('addRoundSuccess', resp);
    return context.getters.selectedTab;
  },
  closeTab(context) {
    tabService.closeTab();

    let resp = tabService.viewTab();
    context.commit('closeTabSuccess', resp);
    return context.getters.selectedTab;
  }
}

const getters = {
  selectedTab: (state) => {
    return state.selectedTab;
  }
}

export const tabs = {
  state,
  mutations,
  actions,
  getters
}