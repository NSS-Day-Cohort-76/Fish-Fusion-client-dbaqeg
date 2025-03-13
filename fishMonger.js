
const { boatInventory } = require("./fishingBoat.js")

const mongerInventory = () => {
    const mongerFishBought = [];
    const fish = boatInventory();
  
  for (let i = 0; i < fish.length; i++) {
      if(fish[i].price <= 7.5 && fish[i].amount >= 10 ){
  
        let newFish = { ...fish[i] }
        if (newFish.amount > 10) {
          newFish.amount = 10
        } 
        mongerFishBought.push(newFish)         
      }
    
  }
  return mongerFishBought;
  }




// const { boatInventory } = require("./fishingBoat.js")

// const mongerInventory = () => {
//     const fish = boatInventory();

//    return fish
  // .filter(fish => fish.price <= 7.5 && fish.amount >= 10) // filters fish based on price and amount
//   .map(fish => { // Creates a new array where we adjust the amount if needed  
//         let newFish = { ...fish }
//         if (newFish.amount > 10) {
//           newFish.amount = 10 // Limits the amount to 10
//         } 
//         return newFish; // Returns modified fish
//       });
//   }


/* code using.filter and .map for the mongerInventory function

const mongerInventory = () => {
    const mongerFishBought = boatInventory();
    
    return mongerFishBought
         .filter(fish => fish.price < 7.5 && fish.amount >= 10)
         .map(fish => ({ ...fish, amount: 10 }))

}
         
*/





  module.exports = { mongerInventory }
  