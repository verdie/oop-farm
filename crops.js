class Wheat {
    constructor(acres) {
      this.acres = acres
    }
  
    getYieldInKg() {
      return Math.pow(this.acres * 1.5, 1.3)
    }
  }
  module.exports = { Wheat }
  
  class Sugarcane {
    constructor(acres) {
      this.acres = acres
    }
  
    getYieldInKg() {
      return Math.pow(this.acres * 2.6, 1.1)
    }
  }
  module.exports = { Sugarcane }