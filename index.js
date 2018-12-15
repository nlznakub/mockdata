// import generator
const generator = require('./generator')

module.exports = () => ({
    customers: generator.customers(5), // create 50 customers
    companies: generator.companies(5), // create 50 companies
})