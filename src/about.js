import { map } from "lodash";

export default function About(parkingPicture,facilitiesPicture) {
    const content = document.getElementById("content");
    content.innerHTML = "";
    const mapContainer = document.createElement("div");
    mapContainer.classList.add("mapContainer");
    mapContainer.innerHTML=`<div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="625" id="gmap_canvas" src="https://maps.google.com/maps?q=4%20%E2%80%93%209%20Southern%20Warehouse&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><br><style>.mapouter{position:relative;text-align:right;height:625px;width:1920px;}</style><a href="https://www.embedgooglemap.net"></a><style>.gmap_canvas {overflow:hidden;background:none!important;height:625px;width:1920px;}</style></div></div>        </div>`
    content.appendChild(mapContainer);

    const appendForm = function() {
        const aboutContainer = document.createElement("div");
        aboutContainer.classList.add("aboutContainer");
        aboutContainer.innerHTML=`            <h2>Contact Us</h2>
        <div class="aboutRow">
            <div class="infoColumn">
                <h3>Our Address</h3>
                <p>4 - 9 Southern Warehouse</p>
                <p>The Quay</p>
                <p>Exeter</p>
                <p>EX2 4AP</p>
                <p>Email: <a>info@waterfrontexeter.co.uk</a></p>
                <p>Phone: 01392 210590</p>
                <h4>Standard Opening Times:</h4>
                <p>Sunday-Thursday 11am-10.30pm for drinks</p>
                <p>Sunday-Thursday 11am-9pm for food</p>
                <p>Friday & Saturday 11am-11pm for drinks</p>
                <p>Friday & Saturday 11am-9.30pm for food</p>
            </div>
                <form id="contactForm" class="flexColumn" name="contactForm" action="" method="post">
                    <h3>Get in Touch</h3>
                    <label for="name">Your Name (required)</label>
                    <input type="text" name="name" required id="name" placeholder="Your Name Here">
                    <label for="email">Your Email (required)</label>
                    <input type="email" name="email" id="email" required placeholder="example@mail.com">
                    <label for="number">Your Contact Number (this is useful should we require to contact you at short notice</label>
                    <label for="Subject"></label>
                    <input type="text" name="subject" id="subject">
                    <textarea name="message" id="" cols="30" rows="14"></textarea>
                    <input id="submit" type="submit" value="SEND">
                </form>
         </div>`
        content.appendChild(aboutContainer);
    }();

    const appendInfo = function() {
        const parkingInfo = document.createElement("div");
        parkingInfo.classList.add("infoBox");
        parkingInfo.innerHTML+=`<h3>Parking Near Exeter Quay</h3>
        <p>We are located just outside the City Centre on the beautiful Exeter Historic Quayside.</p>
        <p>There is plenty of parking around the Quay – just follow the links below:</p> `
        content.appendChild(parkingInfo);
        const parkingDiv = document.createElement("div");
        parkingDiv.classList.add("parkingImgContainer");
            const parkingImg = document.createElement("img");
            parkingImg.src = parkingPicture;
        parkingDiv.appendChild(parkingImg);
        content.appendChild(parkingDiv);
        const transportInfo = document.createElement("div");
        transportInfo.innerHTML=`        <div class="locationInfoRow">
        <div class="">
            <h4>Cathedral & Quay Car Park</h4>
            <p>This car park is free after 6pm, but does close at 11pm.</p>
            <button>More Info</button>
        </div>
        <div class="">
            <h4>Cathedral & Quay Car Park</h4>
            <p>This car park is free after 6pm, but does close at 11pm.</p>
            <button>More Info</button>
        </div>
    </div>
    <div class="infoHeader">
        <h2>Public Transport</h2>
    </div>
    <div class="locationInfoRow">
        <div class="">
            <p>There is a regular bus service, the G Bus, from the High Street to the Historic Quayside.  This runs hourly between 10.30am and 3.30pm from Monday to Saturday.</p>
            <button>More Info</button>
        </div>
        <div class="">
            <p>The Matford Park and Ride service between South Street and Haven Road runs every 10 to 12 minutes between 8am and 6pm, from Monday to Saturday.</p>
            <button>More Info</button>
        </div>
    </div>
    <div class="infoHeader">
        <h2>Facilities</h2>
    </div>
    `
    content.appendChild(transportInfo);
    const facilitiesWrapper = document.createElement("div");
    facilitiesWrapper.classList.add("facilities");
    const facilitiesImg = document.createElement("img");
    facilitiesImg.src = facilitiesPicture;
    facilitiesWrapper.appendChild(facilitiesImg);
    content.appendChild(facilitiesWrapper);

        
    }()

    
}