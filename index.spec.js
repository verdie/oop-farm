const {Farm} = require('./index')

test('A new Farm can be created', () => {
  const farm = new Farm()
  expect(farm).toBeTruthy()
})

test('A Farm can have a name', () => {
    const farm = new Farm('TEST_NAME')
    expect(farm.name).toBe('TEST_NAME')
  })
  

const {Wheat} = require('./crops');

test('The Wheat class can calculate a yield', () => {
  const wheat = new Wheat(100)
  expect(wheat.getYieldInKg()).toBeDefined()
})

test('The Wheat class calculates the proper yield', () => {
  const wheat = new Wheat(100)
  expect(wheat.getYieldInKg()).toBeCloseTo(674.4, 2)
})

const {Sugarcane} = require('./crops');

const {Crop} = require('./crops');
test('A crop can store its area size', () => {
    const crop = new Crop(12345)
    expect(crop.acres).toBe(12345)
  })


  test('Sugarcane class calculates the proper costs value', () => {
    const sugarcane = new Sugarcane(0)
    expect(sugarcane.getCosts()).toBe(0)
  })
  
  test('Sugarcane class calculates the proper costs value', () => {
    const sugarcane = new Sugarcane(456)
    expect(sugarcane.getCosts()).toBe(75696)
  })
  
  test('Wheat class calculates the proper costs value', () => {
    const wheat = new Wheat(123)
    expect(wheat.getCosts()).toBe(41820)
  })