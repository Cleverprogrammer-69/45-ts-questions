interface Car{
    manufacturer:string,
    modelName:string,
    [key:string]:any,
}
interface Attributes {
    [key:string]:string | number
}
function createCar(manufacturer:string, modelName:string, attributes:Attributes={}){
    const car:Car={
        manufacturer,
        modelName,
        ...attributes
    }
    return car
}
 console.log(
   createCar("Toyota", "Corola", {
     color: "blue",
     year: 1998,
     features: "auto",
   })
 ); 