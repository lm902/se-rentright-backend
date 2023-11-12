const sampleData = [
  {
    title: 'Spacious 2-bedroom condo with balcony and parking',
    images: ['https://shared-s3.property.ca/public/images/listings/optimized/r2831429/mls/r2831429_1-640x480.jpg?v=3', 'https://shared-s3.property.ca/public/images/listings/optimized/r2831429/mls/r2831429_2-640x480.jpg?v=3', 'https://shared-s3.property.ca/public/images/listings/optimized/r2831429/mls/r2831429_3-640x480.jpg?v=3'],
    description: 'This condo is located in a quiet and convenient neighborhood, close to shopping, transit, and parks. It features a large living room, a modern kitchen, two bedrooms, and a full bathroom. The balcony offers a nice view of the city and the mountains. The unit comes with one parking spot and a storage locker. The building has a gym, a pool, and a sauna for residents to enjoy.',
    rent: 3500,
    location: {
      lat: 49.264,
      lon: -123.012,
      address: '1234 Main St, Unit 567',
      city: 'Vancouver',
      state: 'BC',
      zip: 'V6A 1B2'
    },
    category: 'condo'
  },
  {
    title: 'Cozy 1-bedroom apartment in downtown',
    images: ['https://shared-s3.property.ca/public/images/listings/optimized/r2831428/mls/r2831428_1-640x480.jpg?v=2', 'https://shared-s3.property.ca/public/images/listings/optimized/r2831428/mls/r2831428_2-640x480.jpg?v=2', 'https://shared-s3.property.ca/public/images/listings/optimized/r2831428/mls/r2831428_3-640x480.jpg?v=2'],
    description: 'This apartment is perfect for anyone who wants to live in the heart of the city. It has a cozy bedroom, a living room with a fireplace, a kitchen with a dishwasher, and a bathroom with a tub. The apartment is fully furnished and includes utilities, internet, and cable. It is close to many restaurants, bars, shops, and attractions. It is also within walking distance to public transportation and bike lanes.',
    rent: 2500,
    location: {
      lat: 49.282,
      lon: -123.117,
      address: '789 Granville St, Apt 9',
      city: 'Vancouver',
      state: 'BC',
      zip: 'V6Z 1K3'
    },
    category: 'apartment'
  },
  {
    title: 'Beautiful 3-bedroom house with backyard and garage',
    images: ['https://shared-s3.property.ca/public/images/listings/optimized/r2831399/mls/r2831399_1-640x480.jpg?v=2', 'https://shared-s3.property.ca/public/images/listings/optimized/r2831399/mls/r2831399_2-640x480.jpg?v=2', 'https://shared-s3.property.ca/public/images/listings/optimized/r2831399/mls/r2831399_3-640x480.jpg?v=2'],
    description: 'This house is ideal for a family or a group of friends who want to live in a spacious and comfortable home. It has three bedrooms, two bathrooms, a living room, a dining room, a kitchen, and a laundry room. The backyard has a deck, a garden, and a fire pit. The garage can fit two cars and has extra space for storage. The house is located in a safe and friendly neighborhood, close to schools, parks, and grocery stores.',
    rent: 4200,
    location: {
      lat: 49.249,
      lon: -122.982,
      address: '4567 Oak St',
      city: 'Burnaby',
      state: 'BC',
      zip: 'V5G 2H8'
    },
    category: 'house'
  },
  {
    title: 'Modern 2-bedroom condo with balcony and amenities',
    images: ['https://shared-s3.property.ca/public/images/listings/optimized/r2831415/mls/r2831415_1-640x480.jpg?v=2', 'https://shared-s3.property.ca/public/images/listings/optimized/r2831415/mls/r2831415_2-640x480.jpg?v=2', 'https://shared-s3.property.ca/public/images/listings/optimized/r2831415/mls/r2831415_3-640x480.jpg?v=2'],
    description: 'This stylish condo is located in a new building in the heart of downtown, close to transit, restaurants, and entertainment. It has 2 bedrooms, 2 bathrooms, an open-concept living room, a kitchen with stainless steel appliances, and a balcony with a stunning view of the city. The condo also comes with access to the building’s amenities, such as a gym, a pool, a sauna, and a concierge. The rent is $1,800 per month, including utilities and parking. No pets or smoking allowed.',
    rent: 3000,
    location: {
      lat: 49.282,
      lon: -123.117,
      address: '5678 West Georgia Street',
      city: 'Vancouver',
      state: 'BC',
      zip: 'V6B 1Z3'
    },
    category: 'condo'
  },
  {
    title: 'Cozy 1-bedroom apartment with hardwood floors and fireplace',
    images: ['https://shared-s3.property.ca/public/images/listings/optimized/r2831373/mls/r2831373_1-640x480.jpg?v=2', 'https://shared-s3.property.ca/public/images/listings/optimized/r2831373/mls/r2831373_1-640x480.jpg?v=2', 'https://shared-s3.property.ca/public/images/listings/optimized/r2831373/mls/r2831373_3-640x480.jpg?v=2'],
    description: 'This charming apartment is located in a heritage building in a trendy neighborhood, close to cafes, bars, and boutiques. It has 1 bedroom, 1 bathroom, a living room with a fireplace, a kitchen with a gas stove, and hardwood floors throughout. The apartment also has a shared laundry room and a storage locker. The rent is $1,200 per month, plus utilities. Cats are welcome.',
    rent: 2200,
    location: {
      lat: 49.269,
      lon: -123.155,
      address: '910 Granville Street',
      city: 'Vancouver',
      state: 'BC',
      zip: 'V6Z 1L2'
    },
    category: 'apartment'
  },
  {
    title: 'Cozy 1-bedroom apartment in downtown',
    images: ['https://shared-s3.property.ca/public/images/listings/optimized/r2831354/mls/r2831354_1-640x480.jpg?v=2', 'https://shared-s3.property.ca/public/images/listings/optimized/r2831354/mls/r2831354_2-640x480.jpg?v=2', 'https://shared-s3.property.ca/public/images/listings/optimized/r2831354/mls/r2831354_3-640x480.jpg?v=2'],
    description: 'This apartment is perfect for anyone who wants to live in the heart of the city. It is a bright and cozy unit, with hardwood floors, a fireplace, and a balcony. It has a bedroom, a bathroom, a kitchen, and a living area. The apartment is fully furnished and equipped with everything you need. The rent is $1,500 per month, including utilities, internet, and cable. Pets are welcome, but no smoking.',
    rent: 2800,
    location: {
      lat: 49.282,
      lon: -123.117,
      address: '789 Granville Street, Unit 101',
      city: 'Vancouver',
      state: 'BC',
      zip: 'V6Z 1K3'
    },
    category: 'apartment'
  },
  {
    title: 'Luxury 3-bedroom townhouse with garage and backyard',
    images: ['https://shared-s3.property.ca/public/images/listings/optimized/r2831285/mls/r2831285_1-640x480.jpg?v=2', 'https://shared-s3.property.ca/public/images/listings/optimized/r2831285/mls/r2831285_2-640x480.jpg?v=2', 'https://shared-s3.property.ca/public/images/listings/optimized/r2831285/mls/r2831285_3-640x480.jpg?v=2'],
    description: 'This townhouse is a rare find in the city. It is a spacious and elegant home, with high ceilings, hardwood floors, and a fireplace. It has three bedrooms, two and a half bathrooms, a gourmet kitchen, a dining room, and a living room. The townhouse also has a garage, a backyard, and a patio. The rent is $3,500 per month, plus utilities. Pets are negotiable, but no smoking.',
    rent: 4500,
    location: {
      lat: 49.249,
      lon: -123.155,
      address: '456 West 12th Avenue, Unit 9',
      city: 'Vancouver',
      state: 'BC',
      zip: 'V5Y 1T1'
    },
    category: 'townhouse'
  }
]
await fetch('/user/login', {
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    'x-requested-with': 'XMLHttpRequest'
  },
  method: 'post',
  body: JSON.stringify({
    email: '',
    password: ''
  })
})
console.log(Promise.all(sampleData.map(entry =>
  fetch('/listing', {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'x-requested-with': 'XMLHttpRequest'
    },
    method: 'post',
    body: JSON.stringify(entry)
  }).then(x => x.json()).then(console.log)
)))
