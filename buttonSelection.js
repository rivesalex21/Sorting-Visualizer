const basic = document.getElementById('btn-basic')
const bubble = document.getElementById('btn-bubble')
const revised = document.getElementById('btn-revised')
const selection = document.getElementById('btn-selection')
const insertion = document.getElementById('btn-insertion')
const bogo = document.getElementById('btn-bogo')
const quick = document.getElementById('btn-quick')
// Reset and Randomize
const reset = document.getElementById('btn-reset')
const randomize = document.getElementById('btn-randomize')
// Sizes
const small = document.getElementById('btn-small')
const medium = document.getElementById('btn-medium')
const large = document.getElementById('btn-large')
const xxl = document.getElementById('btn-xxl')
const xxxl = document.getElementById('btn-xxxl')
//  Generate and Sorts
const generate = document.getElementById('btn-generate')
const sort = document.getElementById('btn-sort')
const delay = document.getElementById('delay')




basic.addEventListener('click',activateButton)
bubble.addEventListener('click',activateButton)
revised.addEventListener('click',activateButton)
selection.addEventListener('click',activateButton)
insertion.addEventListener('click',activateButton)
bogo.addEventListener('click',activateButton)
quick.addEventListener('click',activateButton)
//reset.addEventListener('click',activateButton)
//randomize.addEventListener('click',activateButton)
small.addEventListener('click',activateButton)
medium.addEventListener('click',activateButton)
large.addEventListener('click',activateButton)
xxl.addEventListener('click',activateButton)
xxxl.addEventListener('click',activateButton)

// generating event listener
generate.addEventListener('click',() => {
    generateBars(sortingReq.size)
})
sort.addEventListener('click',() => {
    startSort(sortingReq.sortingAlgo,delay.value)
})

const SIZES =  {
    'small': 20,
    'medium': 40,
    'large': 100,
    'xxl': 200,
    'xxxl': 400
}

const HEIGHT = 400


function activateButton(event) {
    // Create the target
    let target = event.target
    
    // Create the parent node
    parent = target.parentNode
    
    // Remove current activation
    removeActivate(parent)
    target.className = target.className + ' btn-activated'
}

function removeActivate(parent) {
    for (i=0;i<parent.children.length;i++) {
        if (parent.children[i].className.includes('btn-activated')) {
            newName = parent.children[i].className.replace(' btn-activated','')
            parent.children[i].className = newName
        }
    }
}

function generateBars(size) {
    switch (size) {
        case 'small':
            removeCols()
            Randomize(SIZES['small'],HEIGHT)
            break;
        case 'medium':
            removeCols()
            Randomize(SIZES['medium'],HEIGHT)
            break;
        case 'large':
            removeCols()
            Randomize(SIZES['large'],HEIGHT)
            break;
        case 'xxl':
            removeCols()
            Randomize(SIZES['xxl'],HEIGHT)
            break;
        case 'xxxl':
            removeCols()
            Randomize(SIZES['xxxl'],HEIGHT)
            break;     
    }
}

function startSort(sorter, delay) {
    let currentDelay = parseInt(delay)
    switch (sorter) {
        case 'basic':
            basicSort(elements,currentDelay)
            break;
        case 'bubble':
            bubbleSort(elements,currentDelay)
            break;
        case 'revised':
            revisedBubble(elements,currentDelay)
            break;
        case 'selection':
            selectionSort(elements,currentDelay)
            break;
        case 'insertion':
            insertionSort(elements,currentDelay)
            break;
        case 'bogo':
            bogoSort(elements,currentDelay)
            break;
        case 'quick':
            quickSort(elements,currentDelay)
            break;
            

        default:
            alert('Chosen Settings do not work.')
    }
}

