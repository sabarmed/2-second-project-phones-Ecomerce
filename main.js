// const buy = document.getElementsByClassName("btn")[0];
// const aywaa = document.getElementsByClassName("btn")[1];
const bigContainer = document.querySelector(".big-container");
const paid = document.getElementById("paid");
const visa = document.getElementById("visa");

// const bay = document.getElementById("buyNow");
// const jeneni = document.getElementsByClassName("btn")[3];
// const biggcontaner = document.querySelector(".big-container");
// const payy = document.querySelector(".container");
// const vizza = document.getElementById("viza");

// const buay = document.getElementById("buuy");
// const vahem = document.getElementsByClassName("third-btn");
// const biggo = document.querySelector(".big-container");
// const pa = document.querySelector(".container");
// const vii = document.getElementById("viisa");

const dark = document.getElementById("dark");
const body = document.getElementById("body");

dark.addEventListener("click", () => {
  body.classList.toggle("dark");
  // setTimeout(() => {
  // //   dark.classList.toggle("dark")
  // // }, 60000);
});

const buy = document.querySelectorAll(".my-js");
const aywaa = document.querySelectorAll(".aywaa");
const addproduct = document.querySelector("#add-pro");
const procontainer = document.querySelector("#pro-container");

// addproduct.addEventListener("click" ,(eo) => {
//  const newproduct =

//  ` <div class="card" style="width: 18rem;">
// <img class="card-img-top" src="/iphone 15gold.jpg" height="220px" alt="Card image cap">
// <div class="card-body">
//   <h5 class="card-title"> iphone 15promax</h5>
//   <p class="card-text">iphone 15promax brand new Gold capacity 512GB unlocked for any carrier.</p>
//   <input type="hidden" value="1199">
//   <p class="prc" id="zozo"> price :1199<sub class="money">$</sub></p>
//   <a id="buy" href="#" class="my-js btn btn-primary buy">buy Now</a>
// </div>
// </div> `

// procontainer.innerHTML += newproduct

// })

// procontainer.addEventListener("click", (eo) => {
//   if (eo.target.classList == "my-js btn btn-primary buy" ) {
//     bigContainer.classList.add("active")
//     eo.preventDefault()
//     paid.style.display = "none";
//     visa.style.display = "block"
//   }

// })

buy.forEach((item) => {
  item.addEventListener("click", (eo) => {
    bigContainer.classList.add("active");
    paid.style.display = "none";
    visa.style.display = "block";
  });
});

aywaa.forEach((item) => {
  item.addEventListener("click", (eo) => {
    paid.style.display = "block";
    visa.style.display = "none";
    setTimeout(() => {
      paid.style.display = "none";
      bigContainer.classList.remove("active");
    }, 1000);
  });

  // buy.addEventListener("click", (eo) => {
  //   bigContainer.classList.add("active");
  //   paid.style.display = "none";
  //   visa.style.display = "block";
  // });

  // aywaa.addEventListener("click", (eo) => {
  //   bigContainer.classList.remove("active");
  // paid.style.display = "block";
  // visa.style.display = "none";
  // setTimeout(() => {
  //   paid.style.display = "none";
  //   bigContainer.classList.remove("active");
  // }, 2000);
  // });

  // bay.addEventListener("click", (eo) => {
  //   biggcontaner.classList.add("active");
  //   payy.style.display = "none";
  //   visa.style.display = "block";
  // });

  // jeneni.addEventListener("click", (eo) => {
  //   payy.style.display = "block";
  //   vizza.style.display = "none";
  //   setTimeout(() => {
  //     payy.style.display = "none";
  //     bigContainer.classList.remove("active");
  //   }, 2000);
  // });

  // buay.addEventListener("click", (eo) => {
  //   biggo.classList.add("active");
  //   pa.style.display = "none";
  //   visa.style.display = "block";
  // });

  // aywaa.addEventListener("click", (eo) => {
  //   //   bigContainer.classList.remove("active");
  //   pa.style.display = "block";
  //   vii.style.display = "none";
  //   setTimeout(() => {
  //     pa.style.display = "none";
  //     bigContainer.classList.remove("active");
  //   }, 2000);
  // });

  // const baay = document.getElementById("bay");
  // const zombie = document.getElementsByClassName(".for-btn");
  // const big = document.querySelector(".big-container");
  // const bayy = document.querySelector(".container");
  // const master = document.getElementById("carti")

  // baay.addEventListener("click", (eo) => {
  //   bigContainer.classList.add("active");
  //   bayy.style.display = "none";
  //   visa.style.display = "block";
  // });
  // zombie.addEventListener("click", (eo) => {
  //   bayy.style.display = "block";
  //   master.style.display = "none";
  //   setTimeout(() => {
  //     baay.style.display = "none";
  //     bigContainer.classList.remove("active");
  //   }, 2000);
  // });

  // const bauynow = document.getElementById("baayNow")
  // const vempir = document.getElementsByClassName("five-btn")
  // const bigbig = document.querySelector(".big-container")
  // const baaay = document.querySelector(".container")
  // const cart =document.getElementById("carti")

  // bauynow.addEventListener("click" , (eo) =>{
  //   bigContainer.classList.add("active")
  //   baaay.style.display ="none"
  //   visa.style.display ="block"
  // })
  // vempir.addEventListener("click", (eo) =>{
  //   baaay.style.display ="block"
  //   cart.style.display ="none"
  //   setTimeout(() =>{
  //     baaay.style.display ="none"
  //     bigContainer.classList.remove("active")
  //   },2000)
  // })

  // const baybuy =document.getElementById("baybay")
  // const aiwa = document.getElementsByClassName("six-btn")
  // const bigbigo =document.querySelector(".big-container")
  // const pdpaid = document.querySelector(".container")
  // const vizviz =document.getElementById("viz")

  // baybuy.addEventListener("click" ,(eo) =>{
  //   bigContainer.classList.add("active")
  //   pdpaid.style.display="none"
});

const tittle = document.querySelectorAll("h4");
const titlearray = Array.from(tittle);
// querySelectorAll is alrady Array its called NodeList
tittle.forEach((item) => {
  item.style.color = "pink";
  item.classList.remove("big");
});
