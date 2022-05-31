class Sort {
    constructor(_sortingAlgo, _size){
        this.sortingAlgo = _sortingAlgo
        this.size = _size
    }

    getSmall() {
        return this.size = 'small'
    }
    getMedium(event) {
        return this.size = 'medium'
    }
    getLarge() {
        return this.size = 'large'
    }
    getXxl() {
        return this.size = 'xxl'
    }
    getXxxl() {
        return this.size = 'xxxl'
    }
    //////////////////////////////////////////////////
    getBasic() {
        return this.sortingAlgo = 'basic'
    }

    getBubble() {
        return this.sortingAlgo = 'bubble'
    }
    getRevised() {
        return this.sortingAlgo = 'revised'
    }
    getSelection() {
        return this.sortingAlgo = 'selection'
    }
    getInsertion() {
        return this.sortingAlgo = 'insertion'
    }
    getBogo() {
        return this.sortingAlgo = 'bogo'
    }
    getQuick() {
        return this.sortingAlgo = 'quick'
    }
}

let sortingReq = new Sort('basic','small')

small.addEventListener('click',() => {sortingReq.getSmall()})
medium.addEventListener('click',() => {sortingReq.getMedium()})
large.addEventListener('click',() => {sortingReq.getLarge()})
xxl.addEventListener('click',() => {sortingReq.getXxl()})
xxxl.addEventListener('click',() => {sortingReq.getXxxl()})

basic.addEventListener('click',() => {sortingReq.getBasic()})
bubble.addEventListener('click',() => {sortingReq.getBubble()})
revised.addEventListener('click',() => {sortingReq.getRevised()})
selection.addEventListener('click',() => {sortingReq.getSelection()})
insertion.addEventListener('click',() => {sortingReq.getInsertion()})
bogo.addEventListener('click',() => {sortingReq.getBogo()})
quick.addEventListener('click',() => {sortingReq.getQuick()})
