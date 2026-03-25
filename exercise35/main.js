function ChangeImage() {
    const image = document.querySelector("#image");

    // Image URL
    const url = prompt("Fadlan geli link-ga sawirka (image URL):");
    if (url) {
        image.src = url;
    }

    // Border color
    const border = prompt("Geli midabka border-ka (tusaale: red, blue, black):");
    if (border) {
        image.style.border = `3px solid ${border}`;
    }

    // Width
    const width = prompt("Geli width-ka sawirka (pixels, tusaale: 200):");
    if (width) {
        image.style.width = width + "px";
    }

    // Height
    const height = prompt("Geli height-ka sawirka (pixels, tusaale: 200):");
    if (height) {
        image.style.height = height + "px";
    }

    // Border radius
    const radius = prompt("Geli border radius (pixels, tusaale: 10):");
    if (radius) {
        image.style.borderRadius = radius + "px";
    }

    // padding
    const padding = prompt("please enter your padding size")
    if(padding){
        image.style.padding = padding + "px"
    }
}