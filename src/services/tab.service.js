// const tab = {
//   items: [
//     {
//       type: "Lager",
//       price: 45.00,
//       amount: 1,
//       person: "John"
//     }
//   ],
//   status: "Open" //Paid
// }

import { drinkService }   from './drink.service';

export const tabService = {
  openTab,
  viewTab,
  addDrink,
  addRound,
  closeTab
};

function openTab() {
  var tab = {
    items: [],
    status: "Open"
  }
  localStorage.setItem('bar-tab', JSON.stringify(tab));
  return formatTab(tab);
}

function viewTab() {
  let tab = JSON.parse(localStorage.getItem('bar-tab'));

  if (tab)
    return formatTab(tab);
  else 
    return openTab();
}

function addDrink(drink) {
  let tab = JSON.parse(localStorage.getItem('bar-tab') || {});
  tab.items.push(drink);
  localStorage.setItem('bar-tab', JSON.stringify(tab));
}

function addRound(round) {
  let tab = JSON.parse(localStorage.getItem('bar-tab'));
  if (!tab) {
    tab = {
      items: [],
      status: "Open"
    };
  }

  let r = round.filter((drink) => { if (drink.amount > 0) { return drink } });
  r.forEach((el) => {
    tab.items.push(el);
  });

  localStorage.setItem('bar-tab', JSON.stringify(tab));
}

function closeTab() {
  let tab = JSON.parse(localStorage.getItem('bar-tab') || {});
  tab.items = [];
}

function formatTab(tab) {
  var bill = {
    drinks: [

    ],
    total: 0    
  }

  let drinkList = drinkService.getAllDrinks();

  drinkList.forEach((drink) => {
    let occ = tab.items.filter((d) => { if (d.type === drink.type) { return d } });
    let quant = occ.map(d => d.amount).reduce((a, b) => a + b, 0);


    if (quant > 0) {
      bill.drinks.push({
        type: drink.type,
        price: drink.price,
        quantity: quant,
        subTotal: (drink.price * quant)
      });

      bill.total += (drink.price * quant);
    }
  });

  return bill;
}