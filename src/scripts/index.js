import cards from "./menu.json"
import cardCreateFunction from "../html/templates/card.hbs"
// import { brotliDecompressSync } from "zlib"

const cardList = document.querySelector(".js-menu")
const cardHTMLTemplate = cardCreateFunction(cards)

cardList.insertAdjacentHTML("beforeend", cardHTMLTemplate)

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
}

const THEME_COLOR = "theme"

const buttonChangeTheme = document.querySelector(".theme-switch__toggle")
buttonChangeTheme.addEventListener("change", onClickChange)
const mainBody = document.querySelector("body")

function onClickChange(e) {
  if (e.target.checked) {
    mainBody.classList.toggle(Theme.DARK)
    localStorage.setItem(THEME_COLOR, Theme.DARK)

    localStorage.getItem(THEME_COLOR)
  } else {
    localStorage.setItem(THEME_COLOR, Theme.LIGHT)

    mainBody.classList.toggle(Theme.LIGHT)
    mainBody.classList.remove(Theme.DARK)
  }
}

if (localStorage.getItem(THEME_COLOR) === Theme.DARK) {
  buttonChangeTheme.checked = true
  mainBody.classList.add(Theme.DARK)
}
