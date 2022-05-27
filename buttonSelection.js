const basic = document.getElementById('btn-basic')
const bubble = document.getElementById('btn-bubble')
const revised = document.getElementById('btn-revised')
const selection = document.getElementById('btn-selection')
const insertion = document.getElementById('btn-insertion')
const bogo = document.getElementById('btn-bogo')
const quick = document.getElementById('btn-quick')
const reset = document.getElementById('btn-reset')
const randomize = document.getElementById('btn-randomize')
const small = document.getElementById('btn-small')
const medium = document.getElementById('btn-medium')
const large = document.getElementById('btn-large')
const xxl = document.getElementById('btn-xxl')
const xxxl = document.getElementById('btn-xxxl')

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