// Buatlah variabel firstName, lastName, age, isMarried dengan ketentuan
const firstName = " Ai ";
const lastName = " Solihah ";
const age = 21;
const isMarried = false;

// melakukan pengujian dengan console.log()
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(isMarried);  // boolean

// atau dengan cara berikut ini;
// 1. firstName : bertipe data string, dengan nama depan
console.log(" * Ai " )
// atau dengan cara lain dengan memanggil nama dengan
var firstname = "Ai"
console.log("Nama depan  : " + firstName)

// 2. bertipe data string, dengan nama belakang 
console.log(" * Solihah ")
//cara lain 
var lastname = " Solihah "
console.log(" Nama belakang : " + lastName)
 
//untuk membangu  nama depan dan nama belakang 
var firstname = " Ai "
function printFullName(){
    var lastname = " Solihah "
    return firstname + " " + lastname
}

console.log(" fullName " + printFullName())

// 3. bertipe data number, dengan nilai umur
console.log(" umur saya " + 21)
//isMarried
const menikah = 23
const nomarried = 20

const sudahMenikah = menikah > 23
const belumMenikah = nomarried > 20

const keputusanMenikah = sudahMenikah && belumMenikah
console.log(keputusanMenikah)