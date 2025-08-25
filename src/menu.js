export default function loadMenu () {
    const content = document.getElementById('content');
    const menuItems = [chicken , salmon, steak]

    menuItems.forEach(menuItem => {
        const menuItemElement = document.createElement('div');

        const itemName = document.createElement('h3');
        const itemDescription = document.createElement('p');
        const itemPrice = document.createElement('p');

        itemName.textContent = menuItem.name;
        menuItemElement.appendChild(itemName);

        itemDescription.textContent = menuItem.description
        menuItemElement.appendChild(itemDescription)

        itemPrice.textContent = menuItem.price;
        menuItemElement.appendChild(itemPrice)



        content.appendChild(menuItemElement);
    })
}

const chicken = createMenuItem("Grilled Chicken" , "Grilled Chicken with a side of lettuce" , "$12.99")
const salmon = createMenuItem("Baked Salmon" , "Baked Salmon with a side of lettuce" , "$15.99")
const steak = createMenuItem("8oz Filet Mignon" , "8oz Filet Mignon with a side of lettuce" , "$21.99")


function createMenuItem (name , description , price) {
    return {
        name,
        description,
        price,
    }
}