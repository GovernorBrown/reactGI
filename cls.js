class Car {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    getCarInfo() {
        return `${this.make} ${this.model} ${this.year} ${this.color}`;
    }

    addYears(years) {
        this.year += years;
    }
}

class Owner extends Car {
    constructor(make, model, year, color, name, phone) {
        super(make, model, year, color);
        this.name = name;
        this.phone = phone;
    }

    getOwnerInfo() {
        return `${this.name} ${this.phone}`;
    }

}
const cam = new Owner('Ford', 'Mustang', '1969', 'Red', 'Cam', '123456789');

console.log(cam.getCarInfo());