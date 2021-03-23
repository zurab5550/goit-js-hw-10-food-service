import cards from "./menu.json"
import cardCreateFunction from "../html/templates/card.hbs"
import { brotliDecompressSync } from "zlib"

const cardList = document.querySelector(".js-menu")
const cardHTMLTemplate = cardCreateFunction(cards)

cardList.insertAdjacentHTML("beforeend", cardHTMLTemplate)

const buttonChangeTheme = document.querySelector(".theme-switch__toggle")
buttonChangeTheme.addEventListener("change", onClickChange)
const mainBody = document.querySelector("body")
function onClickChange() {
  mainBody.classList.toggle("dark-theme")
  console.log(mainBody.classList)
  if (mainBody.classList[0] === "dark-theme") {
    localStorage.setItem("theme", "dark")
  } else {
    localStorage.setItem("theme", "light")
  }
}
