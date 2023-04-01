
const title =document.getElementById(`title`)

let curvalue=0
const increment =document.getElementById(`increment`)
const reset =document.getElementById(`reset`)
const decrement =document.getElementById(`decrement`)


increment.addEventListener(`click`, () =>{
curvalue=curvalue+1
title.textContent=curvalue

})


decrement.addEventListener(`click`, () =>{
curvalue=curvalue-1
title.textContent=curvalue

})


reset.addEventListener(`click`, () =>{
curvalue=0
title.textContent=curvalue

})