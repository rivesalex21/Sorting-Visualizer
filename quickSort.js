async function partition(elements,low,high,delay) {

    let pivot = elements[high]
    let i = low - 1
    pivot.style.background = COMP_COLOR
    for (let j = low ; j <=high ; j++) {
        elements[j].style.background = REF_COLOR
        await sleep(delay)
        if (getHeight(elements[j]) < getHeight(pivot)) {
            i +=1
            anchor.insertBefore(elements[j],elements[i])
            pivot.style.background = COMP_COLOR
        }
    }
    colorReset(elements,BASE_COLOR)
    anchor.insertBefore(elements[high],elements[i+1])
    return (i+1)
}


async function quicksort(elements,low,high,delay) {
    if (low < high) {
        let pi = await partition(elements,low,high,delay)
         quicksort(elements,low, pi-1,delay)
         quicksort(elements,pi+1,high,delay)
    }
}



function quickSort(elements,delay) {
    let low = 0
    let high = elements.length - 1;

    quicksort(elements,low,high,delay)
}

