

export default function  home(brownie,hall,martini,pizza,salad,green,awardBronze,awardStar,awardLiving,tapasShowCaseImg,cocktailShowcaseImg,pizzaShowcaseImg) {
    
    const content = document.getElementById("content");
    content.innerHTML="";
    // const gallery = document.createElement("div");

    const vidContainer = document.createElement("div");
    content.innerHTML = "";
    vidContainer.classList.add("vidContainer");
    vidContainer.innerHTML=`<div id="video" style="padding-top:56.25%;position:relative;"><iframe src="https://player.vimeo.com/video/193690476?autoplay=1&title=0&byline=0&portrait=0&muted=1&background=1" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`

    const gallery = document.createElement("div");

    gallery.classList.add("gallery");
    const brownieImg = document.createElement("img");
    const hallImg = document.createElement("img")
    const martiniImg = document.createElement("img");
    const pizzaImg = document.createElement("img");
    const saladImg = document.createElement("img");
    const greenImg = document.createElement("img");
    brownieImg.src = brownie;
    hallImg.src = hall;
    martiniImg.src = martini;
    pizzaImg.src = pizza;
    saladImg.src = salad;
    greenImg.src = green;

    gallery.appendChild(brownieImg);
    gallery.appendChild(hallImg);
    gallery.appendChild(martiniImg);
    gallery.appendChild(saladImg);
    gallery.appendChild(greenImg);

    const buttonRow = document.createElement("div");
    buttonRow.classList.add("buttonRow");
    buttonRow.innerHTML=`<button>ORDER TO YOUR TABLE</button><button>ORDER TO TAKEAWAY</button><button>BOOK A TABLE</button><button>PAY DEPOSIT</button>`

    const infoPanel = document.createElement("div");
    infoPanel.classList.add("infoPanel");
    infoPanel.innerHTML=`<h2>Quayside Restaurant and Bar</h2><p class="info">A unique pub and quality restaurant experience on Exeter’s beautiful Quay, we are one of the most popular independent restaurants. We are famous for our gigantic pizzas and are proud to serve only top quality, locally sourced food in our award-winning restaurant/bar. We are Cask Marque accredited, which means you can be certain of a good pint of local ale as well as a vast selection of beers, lagers, cocktails, gins and more.</p>
    <p class="info">Open all day we are family friendly and boast a dining area for parties of up to 100. Our heated terrace is perfectly located to soak up the sun and views whilst watching the world go by whether you are eating or drinking.</p>
    <p class="info">We have two restaurant rooms: Long Room and Boat Room which are available to book. Our bar area and spacious outside terrace are for walk-ins only.</p>`;
        const awardRow = document.createElement("div");
        awardRow.classList.add("awardRow")
            const awardBronzeImg = document.createElement("img");
                awardBronzeImg.src = awardBronze;
            const awardLivingImg = document.createElement("img");
                awardLivingImg.src = awardLiving;
            const awardStarImg = document.createElement("img");
                awardStarImg.src = awardStar;
        awardRow.appendChild(awardBronzeImg);
        awardRow.appendChild(awardLivingImg);
        awardRow.appendChild(awardStarImg);
    infoPanel.appendChild(awardRow);
    
    const showcases = document.createElement("div");
    showcases.classList.add("showcases");
        const tapasShowcase = document.createElement("div");
        tapasShowcase.classList.add("showcase");
           const tapasShowcaseImgElem = document.createElement("img");
            tapasShowcaseImgElem.src = tapasShowCaseImg;
            tapasShowcase.appendChild(tapasShowcaseImgElem);
        tapasShowcase.innerHTML+=`<div class="showcaseColumn">
        <h3>Exeter’s Tastiest Tapas</h3>
        <p>Graze your way through our selection of tapas and small plates. With 16 to choose from they are perfect for sharing, but once you taste them you may not want to. What better way to enjoy the delightful scenery of Exeter Quay than with some tasty tapas and a glass of Vino!</p>
        <button>MENU</button>
    </div>`
    showcases.appendChild(tapasShowcase);
    
    const cocktailShowcase = document.createElement("div");
    cocktailShowcase.classList.add("showcase");
    cocktailShowcase.innerHTML=`<div class="showcaseColumn"><h3>Cocktails On The Quay</h3><p>Come and enjoy our selection of refreshing cocktails. Try our Classics, Signature and VICs (Very Important Cocktails) whilst kicking back on our waterfront terrace enjoying some rays. Drop in on a Sunday-Thursday and take advantage of our Cocktail offers, starting at 2 for £14.00.</p><button>COCKTAIL MENU</button></div>`
            const cocktailShowcaseImgElem = document.createElement("img");
            cocktailShowcaseImgElem.src = cocktailShowcaseImg;
    cocktailShowcase.appendChild(cocktailShowcaseImgElem);
    showcases.appendChild(cocktailShowcase)

    const pizzaShowcase = document.createElement("div");
    pizzaShowcase.classList.add("showcase");
        const pizzaShowcaseImgElem = document.createElement("img");
        pizzaShowcaseImgElem.src = pizzaShowcaseImg;
    pizzaShowcase.appendChild(pizzaShowcaseImgElem);
    pizzaShowcase.innerHTML+=`<div class="showcaseColumn">
    <h3>Pizza Delivery</h3>
    <p>We’re already famous throughout Devon for our delicious pizzas, and we are pleased to be able to offer a new delivery service.
        With a little help from our trusted partner Deliveroo you can now have your favourite pizza delivered to the comfort of your home.
        </p><button>ORDER NOW</button>
    </div>`
    showcases.appendChild(pizzaShowcase)


    content.appendChild(vidContainer);
    content.appendChild(gallery);
    content.appendChild(buttonRow);
    content.appendChild(infoPanel);
    content.appendChild(showcases)
}