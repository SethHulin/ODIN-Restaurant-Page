export default function loadHome () {
    const content = document.getElementById('content');





    const heading = document.createElement('h1');
    const blurb = document.createElement('p');

    heading.textContent = "My Restaurant"
    blurb.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."

    content.appendChild(heading);
    content.appendChild(blurb);
}
