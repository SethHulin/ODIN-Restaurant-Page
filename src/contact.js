export default function loadContact () {
    const content = document.getElementById('content');

    const contact = document.createElement('section')
    contact.id = "contact";

    const name = document.createElement('h3');
    const address = document.createElement('address');
    const phoneNumber = document.createElement('a');

    name.textContent = "My Restaurant";
    contact.appendChild(name);

    address.textContent = "1234 Main Street";
    contact.appendChild(address);

    phoneNumber.textContent = "(337) 552-5738";
    phoneNumber.href = "tel:3375525738";
    contact.appendChild(phoneNumber);

    content.appendChild(contact);
}