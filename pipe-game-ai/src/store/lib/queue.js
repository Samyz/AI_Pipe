class Queue {

    constructor(){
        this.list = [];
    }

    enqueue(element){
        this.list.push(element);
    }

    dequeue(){
        if (this.list.length == 0)
            return null;
        return this.list.shift();
    }

    peek(){
        return this.list[0];
    }

    size(){
        return this.list.length;
    }

    isEmpty(){
        return this.list.length == 0;
    }

    isInStack(element){
        for (var i in this.list){
            if (this.list[i].x == element.x && this.list[i].y == element.y)
                return true;
        }
        return false;
    }

    toString(){
        let str = "[";
        for (var i in this.list)
            str += JSON.stringify(this.list[i]) + " ";
        return str + "]";
    }
}

module.exports = { Queue };