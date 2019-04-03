
# GraphQL API Node Server

## Setup

### Run the following commands on setup

```
npm install
npm run dockerStart
npm run deploy
npm run load
npm run start
```

## Queries

### Get all apartments

```
query getApartments {
  apartments {
    id
    name
    city
    address
    phone
  }
}
```

### Get all apartments in Orem

```
query getApartmentsOrem {
  apartments(where: {
    city: "Orem"
  }) {
    id
    name
    city
    address
    phone
  }
}
```

### Get one apartment

```
query getApartmentById {
  apartments(where: {
    id: "cjtyj55ka009x0874nanhe1qn"
  }) {
    id
    name
    city
    address
    phone
  }
}
```

## Mutations

### Create a new apartment

```
mutation addApartment {
  createApartment(data: {
    name: "Concord at Geneva"
    city: "Vineyard"
    address: "125 Mill Rd"
    phone: "385-203-1000"
  })
  {
    id
    name
    city
    address
    phone
  }
}
```

### Update an apartment

```
mutation updateApartment {
  updateApartment(
    data: {
      city: "Provo"
    }
    where: {
      id: "cju1bxcww002y0737ycgsey2o"
    }
  ) {
    id
    name
    city
  }
}
```

### Delete an apartment

```
mutation deleteApartment {
  deleteApartment(where:{
    id: "cju1c0xje00460737zg07g9te"
  }) {
    id
    name
  }
}
```

## Quick access to all queries and mutations
```
query getApartments {
  apartments {
    id
    name
    city
    address
    phone
  }
}

query getApartmentsOrem {
  apartments(where: {
    city: "Orem"
  }) {
	  id
    name
    city
    address
    phone
  }
}

query getApartmentById {
  apartments(where: {
    id: "cju1cvvav00410749szyo26ch"
  }) {
	  id
    name
    city
    address
    phone
  }
}

mutation addApartment {
  createApartment(data: {
    name: "Concord at Geneva"
    city: "Vineyard"
    address: "125 Mill Rd"
    phone: "385-203-1000"
  })
  {
    id
    name
    city
    address
    phone
  }
}

mutation updateApartment {
  updateApartment(
    data: {
      city: "Provo"
    }
    where: {
      id: "cju1cvvav00410749szyo26ch"
    }
  ) {
    id
    name
    city
  }
}

mutation deleteApartment {
  deleteApartment(where:{
    id: "cju1cvvav00410749szyo26ch"
  }) {
    id
    name
  }
}
```