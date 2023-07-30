function setThisElementActive(e) {
    hasActiveElement(e.parentElement.children, "active");
    e.classList.add("active");
    let activeElements = document.getElementsByClassName("active");
    if (activeElements.length >= 4) {
        console.log("entered score part");
        let items = getListOfItems([...activeElements]);

        let total = 0;

        for (let i = 0; i < items.length; i++) {
            const activeItem = items[i];
            total += scoreOfActiveItem(activeItem);
        }
        let finalScore = total/items.length;
        
        let totalEl = document.getElementById("total");
        totalEl.classList.remove("no-display");
        let totalStars = [...document.getElementById("total-container").children].reverse();
        hasActiveElement(totalStars, "total-active")
        let scoreIndex = Math.floor(finalScore) - 1;
        totalStars[scoreIndex].classList.add("total-active")


    }
}

function hasActiveElement(starParent, activeClass) {
    for (let i = 0; i < starParent.length; i++) {
        const element = starParent[i];
        if (hasClass(element, activeClass)) {
            element.classList.remove(activeClass)
        }
        
    }
}

function hasClass(element, className) {
    return element.classList.contains(className);
}

function getListOfItems(elements) {
    let items = []
    elements.forEach((element, index) => {
        let children = [...element.parentElement.children]
        children.reverse();
        items.push(children);
    })

    return items;
}

function scoreOfActiveItem(elements) {
    let score;
    elements.forEach((element, index) => {
        if (hasClass(element, "active")) {
            score = index + 1;
            return;
        }
    });

    return score;
}