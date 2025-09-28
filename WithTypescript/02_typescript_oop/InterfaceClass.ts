interface Vhicle {
    start(): void;
    stop(): void;

}

class Car implements Vhicle {
    start(): void {
        console.log("car started");
    }
    stop(): void { 
        console.log("car stopped");
    }
}

const myCar = new Car();
myCar.start();
myCar.stop();

