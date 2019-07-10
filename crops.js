class Crop {
    constructor(acres) {
      this.acres = acres;
      
    }
    getYieldInEuros() {
        return getYieldInKg() * this.prize; 
    }
  }


class Wheat  extends Crop {
    constructor(acres) {
        super(acres);
        this.prize = 1.5;
      }
    getYieldInKg() {
      return Math.pow(this.acres * 1.5, 1.3)
    }
  }

  
  class Sugarcane extends Crop {
    constructor(acres) {
        super(acres);
        this.prize = 2;
      }
    getYieldInKg() {
      return Math.pow(this.acres * 2.6, 1.1)
    }
  }

  module.exports = { Wheat , Sugarcane, Crop }