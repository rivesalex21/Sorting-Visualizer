function partition(elements) {
    let low = 0
    let high = elements.length - 1

    let pivot = elements[high]
    let i = low - 1

    for (let j = low ; j <=high ; j++) {
        if (getHeight(elements[j]) < getHeight(pivot)) {
            i +=1
            anchor.insertBefore(elements[j],elements[i])
        }
    }

    anchor.insertBefore(elements[high],elements[i+1])
    return (i+1)
}