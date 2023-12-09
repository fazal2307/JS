const name = "fazal"
const repoCount = 50
//console.log(name + repoCount + "Value"); this is oudated
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('fazal-somthing-fa')

console.log(gameName)
console.log(gameName[0])
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName.sup)
console.log(gameName.valueOf())
console.log(gameName.charAt(2));
console.log(gameName.indexOf('f',));
console.log(gameName.length);
const newString = gameName.substring(0, 4)
console.log(newString)
const anotherString = gameName.slice(-7,4)
console.log(anotherString);

const newOne = "  fazal  "
console.log(newOne)
console.log(newOne.trim())

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));
console.log(url.includes('hitesh'));
console.log(gameName.split('-'));