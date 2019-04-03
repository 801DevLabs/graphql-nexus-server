const fs = require('fs')
const { GraphQLClient } = require('graphql-request')

const client = new GraphQLClient('http://localhost:4466')

const mutation = `mutation addApartment(
  $name: String!,
  $city: String!,
  $address: String!,
  $phone: String!
)

{
  createApartment(data: {
    name: $name
    city: $city
    address: $address
    phone: $phone
  })
  {
    name
    city
    address
    phone
  }
}
`

const sampleFiles = [
  'apartment-data.json',
]

async function main(inputFile) {
  const content = fs.readFileSync(`./seed/${inputFile}`)
  const allApartments = JSON.parse(content)

  allApartments.forEach(async item => {
    const variables = {
      city: item.city,
      name: item.name,
      address: item.address,
      phone: item.phone
    }
  
    await client.request(mutation, variables)
      .then(data => console.log(data))
      .catch(err => console.log(`${err}`))
  })
}

for (let fileName of sampleFiles) {
  main(fileName).catch(e => console.err(e))
}