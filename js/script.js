document.addEventListener('DOMContentLoaded', init);

function init() {
    let links = [];
    
    let bio = document.querySelector('a[href="bio.html"]');
    let design = document.querySelector('a[href="design.html"]');
    let code = document.querySelector('a[href="code.html"]');
    
    links.push(bio);
    links.push(design);
    links.push(code);

    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            // on mouse enter, turn everything to black except the one we're hovering on
            links.forEach(thisLink => {
                if (thisLink !== link) {
                    thisLink.style.color = "#161616";
                } else {
                    thisLink.style.color = "white";
                }
            })
        })
    })

    links.forEach(link => {
        // onmouseleave turn everything back to white
        link.addEventListener('mouseleave', () => {
            links.forEach(thisLink => {
                thisLink.style.color = "#BEBEBE";
            })
        })
    })

    
}