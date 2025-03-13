
const { fishMenu, generateMenuText } = require('./restaurant.js')
const { boatInventory } = require("./fishingBoat.js")
const { mongerInventory } = require("./fishMonger.js")


const dailyPriceLimit = 5;

const menu = fishMenu(mongerInventory(boatInventory()), dailyPriceLimit)
const menuText = generateMenuText(menu)

//console.log(menu)
console.log(menuText)



