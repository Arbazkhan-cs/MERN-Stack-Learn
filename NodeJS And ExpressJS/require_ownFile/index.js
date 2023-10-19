class calcu{
    constructor(var1, var2){
        this.var1 = var1;
        this.var2 = var2;
    }
    add(){
        return this.var1+this.var2;
    }
    sub(){
        return this.var1-this.var2;
    }
    multi(){
        return this.var1*this.var2;
    }
    divi(){
        return this.var1/this.var2;
    }
}
const pow = (a, b)=>{
    return a**b;
}

module.exports = {calcu, pow};