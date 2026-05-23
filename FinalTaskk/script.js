
const api = "https://fakestoreapi.com/products"; 


const container = document.querySelector("#Container");

const loading = document.querySelector("#loading");

const searchInput = document.querySelector("#searchInput");

const categoryButtons = document.querySelectorAll(".category-btn");

const cartCount = document.querySelector("#cartCount");

const cartItems = document.querySelector("#cartItems");

const totalPrice = document.querySelector("#totalPrice");

const openCart = document.querySelector("#openCart");

const closeCart = document.querySelector("#closeCart");

const cartSection = document.querySelector("#cartSection");

let allProducts = [];

let cart = [];
 
const fetchProducts = () => {

    loading.style.display = "block";

    fetch(api)

    .then((response)=>{

        if(!response.ok){

            throw new Error("API Failed");

        }

        return response.json();

    })

    .then((products)=>{

        allProducts = products;

        loading.style.display = "none";

        displayProducts(allProducts);

    })

    .catch((error)=>{

        console.log(error);

        loading.innerHTML = "Error Fetching Products";

    })

    .finally(()=>{

        console.log("API Process Completed");

    });

};

 
const displayProducts = (products) => {

    container.innerHTML = "";

    if(products.length === 0){

        container.innerHTML = `

        <h2>

            No Products Found

        </h2>

        `;

        return;

    }

    products.forEach((item)=>{

        container.innerHTML += `

        <div class="card">

            <img src="${item.image}">

            <h3>

                ${item.title.slice(0,20)}...

            </h3>

            <p class="description">

                ${item.description.slice(0,50)}...

            </p>

            <p class="price">

                ₹ ${item.price}

            </p>

            <button
            onclick="addToCart(${item.id})"
            >

                Add To Cart

            </button>

        </div>

        `;

    });

};

 

searchInput.addEventListener("keyup", ()=>{

    const value = searchInput.value.toLowerCase();

    const filtered = allProducts.filter((item)=>{

        return item.title
        .toLowerCase()
        .includes(value);

    });

    displayProducts(filtered);

});

 

categoryButtons.forEach((button)=>{

    button.addEventListener("click", ()=>{

        const category = button.innerText.toLowerCase();

        categoryButtons.forEach((btn)=>{

            btn.classList.remove("active");

        });

        button.classList.add("active");

        if(category === "all"){

            displayProducts(allProducts);

            return;

        }

        const filteredProducts = allProducts.filter((item)=>{

            return item.category.toLowerCase() === category;

        });

        displayProducts(filteredProducts);

    });

});

 

const addToCart = (id) => {

    const product = allProducts.find((item)=>{

        return item.id === id;

    });

    cart.push(product);

    updateCart();

};

 
const updateCart = () => {

    cartCount.innerText = cart.length;

    cartItems.innerHTML = "";

    cart.forEach((item,index)=>{

        cartItems.innerHTML += `

        <div class="cart-card">

            <h4>

                ${item.title.slice(0,25)}...

            </h4>

            <p>

                ₹ ${item.price}

            </p>

            <button
            class="remove-btn"
            data-index="${index}"
            >

                Remove

            </button>

        </div>

        `;

    });

     

    const total = cart.reduce((sum,item)=>{

        return sum + item.price;

    },0);

    totalPrice.innerText = `
    
    Total : ₹ ${total.toFixed(2)}
    
    `;

};

 

cartItems.addEventListener("click",(event)=>{

    if(event.target.classList.contains("remove-btn")){

        const index = event.target.dataset.index;

        cart.splice(index,1);

        updateCart();

    }

});



openCart.addEventListener("click", ()=>{

    cartSection.classList.add("show-cart");

});

 

closeCart.addEventListener("click", ()=>{

    cartSection.classList.remove("show-cart");

});


fetchProducts();