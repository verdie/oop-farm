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

  test('Wheat class calculates the proper yield value', () => {
    const wheat = new Wheat(100)
    expect(wheat.getYieldInEuros()).toBeCloseTo(1011.6, 1)
  })
  
  test('Sugarcane class calculates the proper yield value', () => {
    const sugarcane = new Sugarcane(200)
    expect(sugarcane.getYieldInEuros()).toBeCloseTo(1943.7, 1)
  })
  
  test('Sugarcane class calculates the proper yield value', () => {
    const sugarcane = new Sugarcane(0)
    expect(sugarcane.getYieldInEuros()).toBe(0)
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

  test('We can add a crop to our farm', () => {
    const farm = new Farm('TEST_NAME')
    farm.addCrop(new Wheat(100))
  })

  test('The income of an empty farm is 0', () => {
    const farm = new Farm('TEST_NAME')
    expect(farm.calculateIncome()).toBe(0)
  })

  test('The income of a 100 Wheat + 100 Sugarcane farm is X', () => {
    const farm = new Farm('TEST_NAME')
    farm.addCrop(new Wheat(100))
    farm.addCrop(new Sugarcane(100))
    expect(farm.calculateIncome()).toBeCloseTo(1918.37, 1)
  })

  test('Animals can be added to the farm', () => {
    const farm = new Farm()
    farm.addAnimal(new Cow(100))
  })
  
  test('Animals will be taken into account for calculateIncome', () => {
    const farm = new Farm()
    farm.addAnimal(new Cow(100))
    expect(farm.calculateIncome()).not.toBe(0)
  })

  const {Pig, Horse, Cow, Animal} = require('./animals');