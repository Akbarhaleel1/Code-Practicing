

class maxBinaryHeap{
    constructor(){
        this.values = []
    }
        insert(value){
            this.values.push(value);
            let index = this.values.length-1;
            while(index>0){
                let parentIndex = Math.floor((index-1)/2);
                if(value<this.values[parentIndex])break;
                [this.values[index],this.values[parentIndex]] = [this.values[parentIndex],this.values[index]]
                index = parentIndex;
            }
            
            return this.values
        }

    extractMax(){
        if(this.values.length===0)undefined;
        if(this.values.length===1)return this.values.pop();
        let max = this.values[0];
        this.values[0] = this.values.pop()
        this.sinkDown(0);
        return max
    }

    sinkDown(idx){
        let length = this.values.length;
        let value = this.values[idx]
   
        while(true){
            let leftChildIndex = Math.floor(2*idx+1)
            let rightChildIndex = Math.floor(2*idx+2)
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIndex<length){
                leftChild = this.values[leftChildIndex]
                if(leftChild>value){
                    swap = leftChildIndex
                }
            }
            if(rightChildIndex<length){
                rightChild = this.values[rightChildIndex];
                if(
                (swap===null&&rightChild>value)||
                (swap!= null&& rightChild>leftChild)
                ){
                    swap = rightChildIndex
                }
            }

           if(swap=== null)break;
           [this.values[idx],this.values[swap]] =  [this.values[swap],this.values[idx]]
           idx = swap
        }
    }

    peek(){
        return this.values[0]
    }

}

const heap = new maxBinaryHeap();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
console.log(heap.insert(55));

console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());

