const anchor = document.getElementById('anchor')
let elements = document.getElementsByClassName('cols')

const BASE_COLOR = 'tomato'
const REF_COLOR  = 'yellow'
const COMP_COLOR = 'lightgreen'

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


async function basicSort(elements,delay) {
    let sorted = false
    count = 0

    for(i=0; i<elements.length; i++) {
        for(j = 0; j<elements.length; j++) {
            elements[i].style.background = COMP_COLOR
            elements[j].style.background = REF_COLOR
            await sleep(delay)
            if (getHeight(elements[j]) > getHeight(elements[i])) {
                anchor.insertBefore(elements[i],elements[j])
                colorReset(elements,BASE_COLOR)               
            }
        }
        colorReset(elements,BASE_COLOR)
    }
}

async function bubbleSort(elements,delay) {
    for (let i = 0; i < elements.length ; i++) {
        for (let j = 0; j < (elements.length - 1 - i); j ++) {
            elements[j].style.background = REF_COLOR
            elements[j+1].style.background = COMP_COLOR

            await sleep(delay)
            if (getHeight(elements[j]) > getHeight(elements [j+1])) {
                anchor.insertBefore(elements[j+1],elements[j])
            }
            colorReset(elements,BASE_COLOR)
        }
    }
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