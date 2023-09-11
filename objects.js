
//object creation methods
//object literal
//const obj = {a:"v"}
//const obj = {}
//obj.firstname = "abhi"
//using a new keyword
//const obj = new Object();
//obj.firstname = "abhi"
//using create

const test = {
    prop: 42,
    firstname: "Abhijeet",
    lasttname: "Sharma",
    func: function(){
        return this.firstname+" "+this.lasttname;
    }
}

test.firstname = "Arun";
console.log(test.func());