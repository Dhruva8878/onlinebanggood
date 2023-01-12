function payOrder(e) {
    // e.preventDefalt();

    let fname = document.querySelector(".first_name").value;
    let lname = document.querySelector(".last_name").value;
    let tele = document.querySelector(".telephone").value;
    let address1 = document.querySelector(".adrr1").value;
    let address2 = document.querySelector(".adrr2").value;
    let country = document.querySelector(".country").value;
    let state = document.querySelector(".state").value;
    let city = document.querySelector(".city").value;
    let postcode = document.querySelector(".postcode").value;
    
    

    if (fname == "" || lname == "" || tele == "" || address2 == "" || address1 == "" || country == "" || state == "" || city == "" || postcode == "") {
        alert("Please Provide Sufficient Address!")
    } else {
        localStorage.setItem("addresser", JSON.stringify(fname));
        location.href = "card_payment.html"
    }


}

///////showing up the actual price of the product item
var productPRICE = JSON.parse(localStorage.getItem("WomensCheckoutItems"))
console.log(productPRICE);
var prive = productPRICE[0].price.toLocaleString("en-IN");

document.querySelector(".orderPay-Price").textContent = prive;
document.querySelector(".orderPay-Price-afterDis").textContent = prive;

var re = JSON.parse(localStorage.getItem("USERNAME"));
    console.log(re);
    if (re !== null) {
        document.querySelector(".zerb").textContent = re;
        // document.querySelector("#Register").textContent = "";
    }