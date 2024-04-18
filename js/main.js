const age=prompt ("età")

const kilomiters=prompt ("Kilometri")

const base = 0.21

let prezzo=(kilomiters * base)


if (age < 18){
    prezzo=(prezzo * 0.2)
} else if (age > 65){
    prezzo=(prezzo * 0.4)
}

alert (prezzo.toFixed(2))
console.log(`Il prezzo è: ${prezzo.toFixed(2)}`)

document.getElementById("biglietto").innerHTML=`Il prezzo del tuo biglietto è:` + prezzo.toFixed(2)


