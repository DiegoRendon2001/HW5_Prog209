
// our handy object constructor to create as many destination (trip) objects as we need.
let Trip = function (pDestination, pMiles, pGallons) {
    this.destination = pDestination;
    this.miles = parseFloat(pMiles);
    this.gallons = parseFloat(pGallons);

    // I moved this function definition into the orginal constuctor
    // just to show it can be done, but not a good idea
    this.calculateMpg = function () {
            return this.miles / this.gallons;
    };
};

// adding methods to the object outside of its defintion
Trip.prototype.isValid = function () {
    if (this.destination == "" ||
        isNaN(this.miles) ||
        isNaN(this.gallons)) {
        return false;
    } else if (this.miles <= 0 || this.gallons <= 0) {
        return false;
    } else {
        return true;
    }
};

Trip.prototype.toString = function () {
    let mpg = this.calculateMpg().toFixed(1);
    return this.destination + ": Miles - " + this.miles + "; MPG - " + mpg;
};