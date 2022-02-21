import { createStore }    from "vuex";
import { drinks }         from "./drink.store";
import { tabs }           from "./tab.store";

export const store = createStore({
  modules: {
    drinks,
    tabs
  }
});
