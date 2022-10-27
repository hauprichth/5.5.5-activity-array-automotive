import {vehicle} from "Vehicle.js"
//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")
class Car extends vehicle{
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    loadPassenger(){
        if (this.passenger < this.maximumPassengers)
        return availableRoom == 'true'    
    }
    start(){
    if (fuel > 0) 
    return start == 'true'
    }
    scheduleService(){
        if (mileage > 30000)
        return maintenance == 'true'
    }
}
//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
