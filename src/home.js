import { get, startCase } from 'lodash';
import greenhall from './assets/greenhall.jpg'

export default function  home(brownie,hall,martini,pizza,salad,green,awardBronze,awardStar,awardLiving,tapasShowCaseImg,cocktailShowcaseImg,pizzaShowcaseImg,bar) {
    
    const placeholderImg = document.createElement("img");
    const placeholderImg1 = document.createElement("img");
    const brownieImg = document.createElement("img");
    const hallImg = document.createElement("img")
    const martiniImg = document.createElement("img");
    const pizzaImg = document.createElement("img");
    const saladImg = document.createElement("img");
    const greenImg = document.createElement("img");
    const barImg = document.createElement("img");
    const greenHall = document.createElement("img");
    const gallery = document.createElement("div");

    placeholderImg.src = greenhall;
    placeholderImg1.src = greenhall;
    brownieImg.src = brownie;
    hallImg.src = hall;
    martiniImg.src = martini;
    pizzaImg.src = pizza;
    saladImg.src = salad;
    greenImg.src = green;
    barImg.src  = bar;
    greenHall.src = greenhall

    let galleryState = {
        position: 0,
        images: [brownieImg,hallImg,martiniImg,pizzaImg,saladImg,greenImg,barImg,greenHall],
        displayImages: [brownieImg,hallImg,martiniImg,pizzaImg],
        length: 8,
    }

    

    const galleryManager = ((state) => {

        const displayPositionMarker = (state) => {
            let positionDiv = document.querySelector(".galleryPosition");
            Array.from(positionDiv.children).forEach(child => {
                child.classList.remove("active");
            });
            let highLightedDiv = document.getElementById(`position${getCircularIndex(state.position)}`);
            highLightedDiv.classList.add("active");
        }

        const renderGallery = (state) => {
            let leftImgIndex = getCircularIndex(state.position-1);
            let leftImg = state.images[leftImgIndex];
            leftImg.classList=""
            gallery.innerHTML=``;
            gallery.prepend(leftImg);
            // state.displayImages.forEach(image => {
            //     image.classList = "";
            //     gallery.appendChild(image);
            // });
            for (let i = 0; i<4;i++){
                let thisIndex = getCircularIndex(state.position+i);
                let thisImage = state.images[thisIndex];
                thisImage.classList=``;
                gallery.appendChild(thisImage);
            }
            let rightImgIndex = getCircularIndex(state.position+4);
            let rightImg = state.images[rightImgIndex];
            rightImg.classList=``;
            gallery.appendChild(rightImg);
        }



        const incrementGallery = (state) => {
                    state.position+=1;
                    state.position=getCircularIndex(state.position);
                    displayPositionMarker(state);
                    
                    Array.from(gallery.children).forEach(image => {
                        image.classList="activeLeft";
                    });
                    setTimeout(() => {
                        renderGallery(state);
                    }, 250);
        }

        const decrementGallery = (state) => {
            let newImgIndex = getCircularIndex(state.position-1);
            let newImg = state.images[newImgIndex];
            newImg.classList='';
            gallery.append(newImg);
            newImg.classList="activeLeft";
            gallery.removeChild(gallery.lastChild);

            setTimeout(() => {
                console.log("waiting");
            }, 10);
            state.displayImages.forEach(img => {
                img.classList="activeLeft";
            });
            newImg.classList="";
            state.displayImages.push(newImg);
            state.displayImages.splice(0,1);
            console.log(state.displayImages);
            setTimeout(() => {
                renderGallery(state);
            }, 250);

            state.position-=1;
            state.position=getCircularIndex(state.position);
            displayPositionMarker(state);
            
        }

        // const decrementGallery = (state) => {
        //     state.position = getCircularIndex(state.position);
        //     let newIndex = getCircularIndex(state.position-1);
        //     let newImage = state.images[newIndex];
        //     // let newImageCopy = Array.from(state.images[newImage]);
        //     // state.displayImages.unshift(newImage);
           
        //         // state.displayImages[4].classList.remove("active");
        //         // state.displayImages[4].classList.add("inactive");
        //         state.displayImages.forEach(image => {
        //             image.classList="activeRight";
        //         });
        //         gallery.appendChild(newImage)

        //         // gallery.prepend(newImage);
                
        //         state.displayImages.splice(4,1);
        //         alert(state.displayImages.length);
            
        //     state.position-=1;
        //     displayPositionMarker(state);

        // }

        // const decrementGallery = (state) => {
        //     state.position = getCircularIndex(state.position);
        //     let newIndex = getCircularIndex(state.position-1);
        //     let newImage = state.images[newIndex];
        //     newImage.classList.add("inactive");
        //     newImage.classList.remove("active");
        //     state.displayImages.unshift(newImage);
        //     if (state.displayImages.length>4) {
        //         newImage.classList="inactive";
                
                
        //         // newImage.classList.remove("active");
        //         // newImage.classList.add("inactive");
        //         // state.displayImages[4].classList.remove("active");
        //         // state.displayImages[4].classList.add("inactive");
        //         // state.displayImages.splice(4,1);
        //     }
        //     state.displayImages[1].classList="inactive";
        //     state.displayImages[1].classList="active";
            
        //     gallery.prepend(newImage);
        //     gallery.prepend(newImage);
    

        //     if (gallery.childElementCount>9) {
        //         gallery.removeChild(gallery.lastChild);
        //     }
       
        

        //     console.log(state.position);
            
        //     state.position-=1;
        //     displayPositionMarker(state);

        // }
        
        const shiftListRight = (state) => {
            let tempImages = [];
            for (let i = 0; i<8;i++) {
                tempImages.push(state.images[getCircularIndex(state.position+i)])
            }
            return tempImages;
        }


        const incrementPosition = (state) =>{
            state.position = getCircularIndex(state.position+1);
            // state.images = shiftListRight(state);
            console.log(state.images);
            setActivePositions(state,true);

        }
        
        const setActivePositions = (state,increasing) => {
            if (increasing) {
                let rightImageIndex = getCircularIndex(state.position+4);
                let rightImage = state.images[rightImageIndex];
                let leftImage = state.images[getCircularIndex(state.position-1)];
                leftImage.classList.remove("active");
                leftImage.classList.add("inactive");
                console.log(leftImage);
                rightImage.classList.add("active");
                rightImage.classList.remove("inactive");
            }

        }

        const test = (state) => {
            state.images.forEach(image => {
                image.classList.add("inactive");
            });
        }

        const getCircularIndex = (index) => {
            if (index<0) {
                return index+8;
            }
            if (index>7) {
                return index-8;
            }
            else return index;
        }

        // const managePosition = (state) => {
        //     if (state.positiion == undefined) {
        //         state.positiion = 0;
        //     }
        //     setCircularPosition(state);
        // }

        // const incrementPosition = (state) => {
        //     state.position+=1;
        //     state.position = getCircularIndex(state.position)
        //     setActivePositions(state,true);

        // }
        
        const decrementPosition = (state) => {
            state.position-=1;
            state.position = getCircularIndex(state.position)
            setActivePositions(state,false);
        }

        return {setActivePositions,incrementPosition,decrementGallery,displayPositionMarker,test,incrementGallery,renderGallery}


    })();

    galleryManager.setActivePositions(galleryState);

    const content = document.getElementById("content");
    content.innerHTML="";
    // const gallery = document.createElement("div");

    const vidContainer = document.createElement("div");
    content.innerHTML = "";
    vidContainer.classList.add("vidContainer");
    vidContainer.innerHTML=`<div id="video" style="padding-top:56.25%;position:relative;"><iframe src="https://player.vimeo.com/video/193690476?autoplay=1&title=0&byline=0&portrait=0&muted=1&background=1" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`
    const galleryWrapper = document.createElement("div");
    galleryWrapper.classList.add("galleryWrapper");
    
    gallery.classList.add("gallery");


    const positionBar = document.createElement("div");
    const galleryBackBtn = document.createElement("button");
    galleryBackBtn.innerHTML = ("<");
    galleryBackBtn.classList.add("backbutton","gallerycontrol");
    positionBar.appendChild(galleryBackBtn);
    positionBar.classList.add('galleryPosition');
    galleryBackBtn.addEventListener("click",event=> {
        galleryManager.decrementGallery(galleryState);
        gallery.firstChild.classList="active";
    })
    for (let i=0; i<8; i++){
        let myDiv = document.createElement("div");
        myDiv.id= `position${i}`;    
        positionBar.appendChild(myDiv);
    }

    const galleryForwardBtn = document.createElement("button");
    galleryForwardBtn.innerHTML = (">");
    galleryForwardBtn.addEventListener("click",event => {
        galleryManager.incrementGallery(galleryState);
    })
    galleryForwardBtn.classList.add("forwardbutton","gallerycontrol");
    positionBar.appendChild(galleryForwardBtn);


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
    galleryWrapper.appendChild(gallery);
    content.appendChild(galleryWrapper);
    content.appendChild(positionBar);
    // content.appendChild(gallery);
    content.appendChild(buttonRow);
    content.appendChild(infoPanel);
    content.appendChild(showcases)
    galleryManager.renderGallery(galleryState);
    galleryManager.displayPositionMarker(galleryState);

}