let calculator = { 
    num1 : null,
    num2 : null,

    read() {
        this.num1 = parseInt(prompt("Insert number 1:"));
        this.num2 = parseInt(prompt("Insert number 2:"));
    },
    sum() {
        return this.num1 + this.num2;
    },

    mul(){
        return this.num1 * this.num2;
    },          
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
