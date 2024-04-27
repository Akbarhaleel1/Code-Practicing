const { log } = require("console");

class PriorityQueues {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);
        this.bubbleUp(this.values.length - 1);
        return this.values;
    }

    bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.values[index].priority <= this.values[parentIndex].priority) break;
            [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
            index = parentIndex;
        }
    }

    extractDown() {
        if (this.values.length === 0) return undefined;
        let max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.bubbleDown(0);
        }
        return max;
    }

    bubbleDown(index) {
        let length = this.values.length;
        let value = this.values[index];

        while (true) {
            let leftChildIndex = Math.floor(2 * index + 1);
            let rightChildIndex = Math.floor(2 * index + 2);
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild.priority > value.priority) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if ((swap === null && rightChild.priority > value.priority) ||
                    (swap !== null && rightChild.priority > leftChild.priority)) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            [this.values[index], this.values[swap]] = [this.values[swap], this.values[index]];
            index = swap;
        }
    }
}

const pq = new PriorityQueues();
pq.insert({value: "task1", priority: 1});
pq.insert({value: "task2", priority: 2});
pq.insert({value: "task3", priority: 3});
log(pq.insert({value: "task4", priority: 4}));  // Log heap structure after all inserts
log(pq.extractDown());  // Should log the highest priority task, which is task4
