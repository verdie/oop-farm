class Crop {
    constructor(acres) {
      this.acres = acres
      
    }
    
  }


class Wheat  extends Crop {
    // constructor() {
    //     super()
    //   }
    getYieldInKg() {
      return Math.pow(this.acres * 1.5, 1.3)
    }
  }

  
  class Sugarcane extends Crop {
    // constructor() {
    //   super()
    // }
    getYieldInKg() {
      return Math.pow(this.acres * 2.6, 1.1)
    }
  }

  module.exports = { Wheat , Sugarcane, Crop}