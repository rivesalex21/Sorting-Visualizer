const anchor = document.getElementById('anchor')
let elements = document.getElementsByClassName('cols')

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


async function basicSort(elements,delay,baseColor,checkColor) {
    let sorted = false
    count = 0

    for(i=0; i<elements.length; i++) {
        for(j = 0; j<elements.length; j++) {
            elements[j].style.background = checkColor
            await sleep(delay)
            if (getHeight(elements[j]) > getHeight(elements[i])) {
                anchor.insertBefore(elements[i],elements[j])
                colorReset(elements,baseColor)               
            }
        }
        colorReset(elements,baseColor)
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

class Sorter {
    constructor(_sorter,_size){
        this.sorter = _sorter
        this.size = _size
    }
}

let sorterParams = new Sorter('basic',100)