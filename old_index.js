const { prisma } = require('./generated/prisma-client')

// A `main` function so that we can use async/await
async function main() {

  // Read all users from the database and print them to the console
  // const allUsers = await prisma.users()
  // console.log(allUsers)

  // Read all users from the database and print them to the console
  const allApartments = await prisma.apartments()
  console.log(allApartments)
}

main().catch(e => console.error(e))