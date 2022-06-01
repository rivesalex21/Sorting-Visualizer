const anchor = document.getElementById('anchor')
let elements = document.getElementsByClassName('cols')

const BASE_COLOR = 'tomato'
const REF_COLOR  = 'yellow'
const COMP_COLOR = 'lightgreen'
const NEW_MIN = 'green'

// Basic sort: A simple approach to sorting that doesn't always work. 
async function basicSort(elements,delay) {
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

// Bubble Sort : Simplest WORKING sorting algorithm
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

// Revised bubble sort introduces logic to stop unneeded sorting loops.
async function revisedBubble(elements,delay) {
    let sorted = false
    for (let i = 0; i < elements.length ; i++) {
        sorted = true
        for (let j = 0; j < (elements.length - 1 - i); j ++) {
            elements[j].style.background = REF_COLOR
            elements[j+1].style.background = COMP_COLOR
            await sleep(delay)
            if (getHeight(elements[j]) > getHeight(elements [j+1])) {
                anchor.insertBefore(elements[j+1],elements[j])
                sorted = false
            }
            colorReset(elements,BASE_COLOR)
        }
        if (sorted == true) {return}
    }
}

// Selection Sort
async function selectionSort(elements,delay){
    let newMin = false
    for (let i = 0; i < elements.length - 1 ; i++) {
        elements[i].style.background = COMP_COLOR
        let currentMin = elements[i]

        for (let j = i+1 ; j < elements.length ; j ++){
            elements[j].style.background = REF_COLOR

            if( getHeight(elements[j]) < getHeight(currentMin)) {
                currentMin.style.background = REF_COLOR
                elements[i].style.background = COMP_COLOR
                currentMin = elements[j]
                currentMin.style.background = NEW_MIN
                newMin = true
            }
        await sleep(delay)
        }
        if(newMin == true) {
            anchor.insertBefore(currentMin,elements[i])
            newMin = false
        }
        colorReset(elements,BASE_COLOR)
    }
}

// Insertion Sort

async function insertionSort(elements,delay) {
    for (let i = 1 ; i < elements.length ; i++) {
        let compareVal = elements[i]
        compareVal.style.background = COMP_COLOR
        await sleep(0)
        let j = i - 1;
        while (j >= 0 && getHeight(elements[j]) > getHeight(compareVal)) {
            await sleep(delay)
            anchor.insertBefore(elements[j+1],elements[j])
            j = j-1
        }
        colorReset(elements,BASE_COLOR)
    }
}

// BOGO 

async function bogoSort(elements,delay) {
    let sorted = false
    let count = 0

    while (sorted != true && count<200) {
        count += 1
        shuffle(elements)

        for(i = 0; i < elements.length - 1; i++) {
            await sleep(delay)
            elements[i].style.background = COMP_COLOR

            if(getHeight(elements[i]) > getHeight(elements[i+1])) {
                sorted = false
                colorReset(elements,BASE_COLOR)
                break
            }
            sorted = true
        }
    }
}


// Quick Sort