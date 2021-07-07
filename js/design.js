// script for the image popup
document.addEventListener('DOMContentLoaded', () => {
    let image = document.querySelector('.overlay img');

    openImage(image);
    closeImage(image);
})

function openImage(image) {
    let titles = document.querySelectorAll(".post h1");

    titles.forEach(title => {
        title.addEventListener('click', (e) => {
            let value = e.target.innerText;
            
            // changing src depending on the image
            if (value == "Monk") {
                image.src = "images/exp.jpg";
            } else if (value == "Suffocating Buddha") {
                image.src = "images/buddha.jpg";
            } else if (value == "Hope") {
                image.src = "images/corona.jpg";
            }

            image.parentElement.style.display = "flex";
            setTimeout(() => {
                image.parentElement.style.opacity = "1";
                
            }, 100);
            
        })
    })
}

function closeImage(image) {
    image.parentElement.addEventListener('click', (e) => {
        if (e.target !== image){
            
            image.parentElement.style.opacity = 0;

            setTimeout(() => {
                image.parentElement.style.display = "none";
            }, 1000);
        }
    });
}