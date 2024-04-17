let age=prompt ("età")

let kilomiters=prompt ("Kilometri")

let prezzo=(kilomiters * 0.21)

if (age < 18){
    let prezzo=(prezzo * 20 / 100 - prezzo )
} else if (age > 65){
    let prezzo=(prezzo * 40 / 100 - prezzo)
}

alert (prezzo)
// console.log(`Il prezzo è: ${prezzo}`)

// document.getElementById(biglietto).innerHTML=prezzo

// document.getElementById("biglietto").innerHTML=()