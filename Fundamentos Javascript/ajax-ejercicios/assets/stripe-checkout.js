import STRIPE_KEYS from "./stripe-keys.js"

//console.log(STRIPE_KEYS);

const d = document,
$tacos = d.getElementById("tacos"),
$template = d.getElementById("taco-template").content,
$fragment = d.createDocumentFragment(),
fetchOptions = {
    headers:{
        Authorization: `Bearer ${STRIPE_KEYS.secret}`
    }
}

let products,prices;

const moenyFormat = num => `$${num.slice(0,-2)}.${num.slice(-2)}` 

Promise.all([
    fetch("https://api.stripe.com/v1/products",fetchOptions),
    fetch("https://api.stripe.com/v1/prices",fetchOptions)
])
.then(responses => Promise.all(responses.map(res=> res.json())))
.then(json=>{
    //console.log(json);
    products = json[0].data;
    prices = json[1].data;
    console.log(products,prices);
    prices.forEach(el=>{
        let productData = products.filter(product => product.id === el.product);
        console.log(productData);

        $template.querySelector("figure").setAttribute("data-price",el.id);
        $template.querySelector("img").src = productData[0].images[0];
        $template.querySelector("img").alt = productData[0].name;
        $template.querySelector("figcaption").innerHTML = `
        ${productData[0].name}
        <br>
        ${moenyFormat(el.unit_amount_decimal)} ${el.currency}`;
        let $clone = d.importNode($template,true);
        $fragment.appendChild($clone)
    })

    $tacos.appendChild($fragment);

})
.catch(err=>{
    console.log(err);
    let message = err.statusText || "Ocurrio un errror al conectarse a la API Stripe";
    $tacos.innerHTML = `<p>Error ${err.status}: ${message}</p>`
})


d.addEventListener("click",e=>{
    //console.log(e.target);
    if (e.target.matches(".taco *")) {
        //alert("A comprar")
        let price = e.target.parentElement.getAttribute("data-price");
        console.log(price);
        Stripe(STRIPE_KEYS.public)
        .redirectToCheckout({
            lineItems:[{price, quantity:1}],
            mode: "subscription",
            successUrl:"http://127.0.0.1:5500/Fundamentos%20Javascript/ajax-ejercicios/assets/stripe-success.html",
            cancelUrl:"http://127.0.0.1:5500/Fundamentos%20Javascript/ajax-ejercicios/assets/stripe-cancel.html"
        })
        .then(res=>{
            if (res.error) {
                console.log(res);
                
                $tacos.insertAdjacentHTML("afterend",res.error.message)
            }
        })
    }
})