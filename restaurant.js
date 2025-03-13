const { mongerInventory } = require("./fishMonger.js")
const { boatInventory } = require("./fishingBoat.js")

const fishMenu = (fishWeCanBuy, dailyPriceLimit) => {
    const whatTheChefBuys = []
    for (let i = 0; i < fishWeCanBuy.length; i++){
        if (fishWeCanBuy[i].price <= dailyPriceLimit) {
            const fishCopy = { ...fishWeCanBuy[i] }
            fishCopy.amount /= 2
            whatTheChefBuys.push(fishCopy)
          
        }
        }
        return whatTheChefBuys;
  }

// const generateMenuText = (todaysFish) => {
//   let menuText = '';
//   for (let i = 0; i < todaysFish.length; i++) {
//        {
//           menuText += `
//           <h1>Menu</h1>
//           <article class="menu">
//             <h2>${todaysFish[i].species}</h2>
//             <section class="menu__item">${todaysFish[i].species} Soup</section>
//             <section class="menu__item">${todaysFish[i].species} Sandwich</section>
//             <section class="menu__item">Grilled ${todaysFish[i].species}</section>
//           </article>
//         `;
//        } 
//       }
//       return menuText;
//     }





const generateMenuText = (todaysFish) => {
return todaysFish.map(fish => `
          <h1>Menu</h1>
          <article class="menu">
            <h2>${fish.species}</h2>
            <section class="menu__item">${fish.species} Soup</section>
            <section class="menu__item">${fish.species} Sandwich</section>
            <section class="menu__item">Grilled ${fish.species}</section>
          </article>
 `).join('');
}

module.exports = { fishMenu, generateMenuText };



/* code using .map and .filter should work

 const fishMenu = (fishWeCanBuy, dailyPriceLimit) => {
    return fishWeCanBuy
    .filter(fish => fish.price <= dailyPriceLimit)
    .map(fish => {
        return { ...fish, amount: fish.amount / 2 }
  
    })

}
    */
