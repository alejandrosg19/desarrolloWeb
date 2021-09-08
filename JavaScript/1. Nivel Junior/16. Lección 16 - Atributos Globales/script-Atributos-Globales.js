/*contenteditable*/
const contentEditable = document.querySelector(".ejemplo1")
contentEditable.setAttribute("contentEditable","true")

/*dir*/
const dir = document.querySelector(".ejemplo2")
dir.setAttribute("dir","ltr")
dir.setAttribute("dir","rtl")

/*hidden*/
const hidden = document.querySelector(".ejemplo3")
hidden.setAttribute("hidden", "true")

/*tabindex*/
const tabIndex1 = document.querySelector(".input1")
tabIndex1.setAttribute("tanindex","0")
const tabIndex2 = document.querySelector(".input2")
tabIndex2.setAttribute("tanindex","2")
const tabIndex3 = document.querySelector(".input3")
tabIndex3.setAttribute("tabindex","1")

/*title*/
const title = document.querySelector(".ejemplo5")
title.setAttribute("title","esto es un titulo")