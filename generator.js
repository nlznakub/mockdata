const chance = require('chance').Chance()
let customerId = 0;
const createCustomer = () => {
    customerId++;
    return {
        id: customerId,
        firstname: chance.first(),
        lastname: chance.last(),
        birthday: chance.birthday({ string: true }),
        gender: chance.gender(),
        avatar: chance.avatar({ protocol: 'https', fileExtension: 'jpg' })
    }
}

// company object data
let companyId = 0;
const createCompany = () => {
    companyId++;
    return {
        id: companyId,
        companyName: chance.company(), // random company name
        email: chance.email(),         // random email
        website: chance.url(),         // random url
        tel: chance.phone(),           // random mobile phone
        address: chance.address(),     // random address

    }
}

// create mixin for use in other files
// usage: chance.customerProfile()
chance.mixin({
    customerProfile: createCustomer,
    companyProfile: createCompany,
})

// export generate customers and companies
module.exports = {
    customers: (n) => chance.n(chance.customerProfile, n), // create n customer profiles
    companies: (n) => chance.n(chance.companyProfile, n),  // create n companie profiles
}