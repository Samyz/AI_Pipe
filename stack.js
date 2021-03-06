class Stack {

    constructor(){
        this.list = [];
    }

    push(element){
        this.list.push(element);
    }

    pop(){
        if (this.list.length == 0)
            return null;
        return this.list.pop();
    }

    peek(){
        return this.list[this.list.length - 1];
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

    getList(){
        return this.list;
    }
}

module.exports = { Stack };