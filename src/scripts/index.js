import cards from "./menu.json"
import cardCreateFunction from "../html/templates/card.hbs"

const cardList = document.querySelector(".js-menu")
const cardHTMLTemplate = cardCreateFunction(cards)

cardList.insertAdjacentHTML("beforeend", cardHTMLTemplate)
