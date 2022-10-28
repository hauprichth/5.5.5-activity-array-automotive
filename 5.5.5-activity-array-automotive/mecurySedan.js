const VehicleModule = require('./vehicle').Vehicle

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    checkService() {
        if (this.mileage > 30000){
        console.log("Take car for service");
        return true;
        }
        else {
            console.log("Drive away");
            return false;
        }
    }

    start() {
        if (this.fuel <= 0){
            console.log("Car will not start");
            return false;
        }
      else {
        console.log("Car will start!") 
          this.started = true;
    return true; 
            }
        }
    loadPassenger(num) {
        if (this.maxPassengers < this.passenger + num) {
            console.log("Pile on in");
            this.passenger = this.passenger + num;
            return true;
        }
        else {
            console.log("All full");
            return false;
        }
   
    }


}


let myCar = new Car('mercury', 'rad_sedan', '2002', 'white', 50000)

myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.checkService()

console.log(myCar)
