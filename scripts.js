// A list of provinces:

const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:

const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:

const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: '' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Iterate over the 'names' array and log each name

names.forEach(name => console.log(name))

// Iterate over the 'provinces' array and log each province
provinces.forEach(province => console.log(province))


// Iterate over the 'names' array and log each name along with its corresponding province from 'provinces' array
names.forEach((name, index) => {
console.log(`${name} (${provinces[index]})`)
});

// Convert all names to uppercase using 'map' and log the result
const uppercase = names.map(name => name.toUpperCase())
console.log(uppercase)

// Get the length of each name in the 'names' array using 'map' and log the result
const nameLengths = names.map(name => name.length)
console.log(nameLengths)

// Sort the 'provinces' array in ascending order and log the result
const sortedProvinces = [...provinces].sort()
console.log(sortedProvinces)

// Filter provinces that do not contain the word 'Cape' and log the remaining count
const filteredProvinces = provinces.filter(province => !province.includes('Cape'))
console.log(`The remaining provinces: ${filteredProvinces.length}`)

// Check if any name in the 'names' array contains the letter 'S' and log the results
const containsS = names.map((name) => name.includes('S'))
console.log(containsS)


// Check if any name contains 'S' by using 'some' to check for truthy values in the 'containsS' array
const containsSResult = containsS.some(Boolean)
console.log(containsSResult)

// Use 'reduce' to create an object that maps names to provinces and log the result
const nameProvinceMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index]
  return acc
}, {});
console.log(nameProvinceMapping)

// Log the following operations on the 'products' array:
// 1. Map the product names
// 2. Filter products with names having 5 or fewer characters
// 3. Calculate the total price of products that have a valid price
// 4. Concatenate all product names into a single string
// 5. Find the highest and lowest product prices
// 6. Transform the products into an object with 'name' and 'cost' properties


console.log(
  products.map((product) => product.product), // Get all product names
  products.filter((product) => product.product.length <= 5), // Filter products with names <= 5 characters
  "The total price:" +
    products.filter((product) => product.price && !isNaN(product.price)) // Filter valid prices and sum them
    .reduce((sum, product) => sum + Number(product.price), 0),

 // Combine all product names into a single string
 products.reduce((str, product) => str + product.product, ""),

// Find the highest and lowest product prices, using Infinity for empty prices
  "Highest: " +
    Math.max(...products.map((product) => Number(product.price) || -Infinity)) +
    ". Lowest: " +
    Math.min(...products.map((product) => Number(product.price) || Infinity)),

// Transform the 'products' array into an object with 'name' and 'cost' properties
  Object.fromEntries(
    Object.entries(products).map(([key, { product, price }]) => [
      key,
      { name: product, cost: price },
    ])
  )
);
