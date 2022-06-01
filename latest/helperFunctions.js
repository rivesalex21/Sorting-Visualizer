
function getHeight(element) {
    return element.clientHeight
}

function colorReset(elements,cl) {
    for (let i = 0; i < elements.length ; i++) {
        elements[i].style.background = cl
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve,ms))
}

function Randomize(num,max_height) {
    for(let i=0; i<num;i++) {
        let el = document.createElement('div')
        el.className = 'cols'
        el_height = parseInt(Math.random()*max_height)
        el.style.height = `${el_height}px`
        anchor.appendChild(el)

    }

}

function removeCols() {
    while (anchor.hasChildNodes()) {
        anchor.firstChild.remove()
    }
}

function shuffle(elements) {
    let currentIndex = elements.length , randomIndex
    let anchor = elements[0].parentElement
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * (currentIndex));
      currentIndex--;
  
      // And swap it with the current element.
        anchor.insertBefore(elements[currentIndex],elements[randomIndex])
    }
  
  }


