let age=prompt ("età")

let kilomiters=prompt ("Kilometri")

let prezzo=(kilomiters * 0.21)


if (age < 18){
    prezzo=(prezzo * 20 / 100 - prezzo )
} else if (age > 65){
    prezzo=(prezzo * 40 / 100 - prezzo)
}

alert (prezzo.toFixed(2))
console.log(`Il prezzo è: ${prezzo.toFixed(2)}`)

document.getElementById("biglietto").innerHTML=prezzo.toFixed(2)


// document.getElementById("biglietto").innerHTML=()