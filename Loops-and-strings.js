for (let count = 1; count <=5; count++){
    console.log("data science")
}
console.log("loop has ended")

 let i = 1;
 while(i<11) {
    console.log("i=",i);
    // console.log("phone")
    i++
 }
let j = 20;
 do {
    console.log("tree");
    j++;
 } while(j <=10);

let str = "Restart";
for (let i of str){
    console.log("i =", i);
}

let student = {
    name: "Tanu",
    age: 23,
    cgpa: 7.79,
    isPass: true

};
for (let key in student) {
    console.log("key = ","value", student[key]);
}


// String
let str2 = "computer network";
str2.length
console.log(str2.length);
str2[9]
console.log(str2 [9]);

// Template Literals
let obj = {
    item: "pen",
    price: "10",
};
let output = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

let str3 = "apple";
let newstr3 = str3.toUpperCase();
console.log(newstr3);

let str4 = "abcde";
console.log(str4.slice(1, 4));

let str5 = "Java";
let str6 = "script"
let res = "I am learning " + str5 + (str6);
console.log(res)

let str7 = "cat";
console.log(str7.replace("c", "r"));
console.log(str7.charAt(1));
