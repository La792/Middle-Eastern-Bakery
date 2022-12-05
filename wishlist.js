let wishList = [];

function setup() 
{
    var products = document.querySelectorAll(".but");
    for (let i = 0; i < products.length; i++)
    {
        products[i].onclick = function(e) {
            addItem(e);
        }
    }
//Function setup define the event handlers for the Add to list Buttons
//querySelectorAll is used to get the collection of elements for each button
}

function addItem (e) {
    var aside = document.getElementById("wishlist");
    var productId = e.target.getAttribute("id");
    if(!wishList.find(element => element === productId)){
        wishList.push(productId);
        var productDiv = document.getElementById("product" + productId);
        var wishDiv = document.createElement("div");
        wishDiv.setAttribute("id", "wish" + productId);
        wishDiv.innerHTML += productDiv.innerHTML;
        aside.appendChild(wishDiv);
        var inputTag = document.createElement("input");
        inputTag.setAttribute("id", "remove" + productId);
        inputTag.setAttribute("type", "button");
        inputTag.setAttribute("value", "Remove");
        inputTag.setAttribute("class", "removebut");
        inputTag.onclick = function() {
            document.getElementById("wish" + productId).remove();
            wishList = wishList.filter(function(element) {
                return element !== productId
            })
        }
        wishDiv.appendChild(inputTag);
    }
//Additem(e) adds items to the wish list
/*I expanded the assignment by adding a remove button allowing the user to remve products from the wish list. InputTag.setAttribute identifies the remove button. Document.getElementById is used to return an element with a specific value.*/
}
window.addEventListener("load", setup);