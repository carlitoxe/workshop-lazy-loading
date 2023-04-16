const isIntersecting = (entry) => {
    // 200px away from the viewport then -- X, Y action
    return entry.isIntersecting; // true if it's in the viewport (pantalla)
}

const loadImage = (entry) => {
    const container = entry.target; //div container
    //const wrapper = container.firstChild;
    const image = container.querySelector('img');
    const url = image.dataset.src;
    // load image
    image.src = url;
    //unlisten image (dejar de escuchar a la imagen una vez registrada)
    loadedImages++;
    printLog();
    observer.unobserve(container)
} 

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
})

export const registerImage = (image) => {
    observer.observe(image)
}