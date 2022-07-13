export default function menu(suppliers) {
    const content = document.getElementById("content");
    content.innerHTML = "";
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menuContainer");
    menuContainer.id="menuContainer";
    menuContainer.innerHTML+=`            <h2>Bar & Restaurant Menus</h2>
    <p><b>
        Thinking of eating out in Exeter? View our different menus online or download before you visit us. We have a huge range of choices available including our famous pizzas, tapas, salads, and burgers.</b></p>
    <p>
        We pride ourselves on sourcing ingredients locally where possible. The fruit and vegetables used in our restaurant all come from within 15 miles of Exeter and our beefsteaks are from grass-pastured Devon cows. As a Cask Marque accredited pub, we also offer locally produced soft drinks, ales and coffee.
    </p>
    <div class="buttonRow">
        <button>Food Menu</button>
        <button>Drinks Menu</button>
    </div>`
    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("imgWrapper");
   const ourSuppliers = document.createElement("img");
    ourSuppliers.src = suppliers;

    menuContainer.appendChild(ourSuppliers);
    // ourSuppliers.src = 
    menuContainer.innerHTML+="<button>BOOK NOW</button>";

    content.appendChild(menuContainer);

} 