const bioData={
    name:"Ruchika",
    age:25,
    channel:"Thapa Technical"
};
// console.log(bioData);
// console.log(bioData.name);
// if we want to change object in json then use stringify method
const jsonData=JSON.stringify(bioData);
console.log(jsonData);
// if we want to change object to json then use parser method
const objData=JSON.parse(jsonData);
console.log(objData);