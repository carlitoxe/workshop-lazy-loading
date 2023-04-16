import { registerImage } from "./lazy"

// Create image
// Add to #images

const min = 1
const max = 123
const random = () => Math.floor(Math.random() * (max - min)) + min 

const createImageNode = () => {
        const container = document.createElement('div');
        container.className = 'p-8 w-80 max-w-xs bg-yellow-200 hover:bg-yellow-600 border-2 border-black rounded-md'

        const image = document.createElement('img');
        image.className = 'mx-auto h-52 object-cover w-full bg-gray-300';
        image.dataset.src = `https://randomfox.ca/images/${random()}.jpg` 
        image.alt = 'random-fox';
/* 
        const imageWrapper = document.createElement("div");
        imageWrapper.className = "mx-auto rounded-md";
        imageWrapper.style.minHeight = "100px";
        imageWrapper.style.display = "inline-block";
        imageWrapper.appendChild(image); */

        container.appendChild(image);

        appendedImages++;
        printLog();
        return container;
}

const mountNode = document.getElementById('images'); //Access to HTML Element images

const addButton = document.querySelector('#addButton');

const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);

    registerImage(newImage);
}
addButton.addEventListener('click', addImage)

const deleteButton = document.querySelector('#deleteButton');

const deleteImage = () => {
    if (mountNode.hasChildNodes()) {
        const container = mountNode.lastElementChild;
        mountNode.removeChild(container);
    }
    appendedImages--;
    loadedImages--;
    printLog();
}

deleteButton.addEventListener('click', deleteImage);

const clearButton = document.querySelector('#clearButton');

const clearImages = () => {
    console.log(mountNode.childNodes);
    [...    mountNode.childNodes].forEach(child => {
            child.remove();
    })
    appendedImages = 0;
    loadedImages = 0;
    printLog();
}

clearButton.addEventListener('click', clearImages);
