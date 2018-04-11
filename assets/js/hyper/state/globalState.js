

var companyInfo = {
  title:'PRIME STEAK RESTAURANT',
  phone: '(518) - 319 - 8752',
  location:'Los Angeles, California',
}

var specialMenuData = [
  {
    title: 'Super BBQ Grill No Smoke',
    description: 'Fried eggs, Steak, baked potato or french fries side of vegetables',
    price: 25
  },
  {
    title: 'Chicken Fingers',
    description: 'Fried eggs, Steak, baked potato or french fries side of vegetables',
    price: 25
  },
  {
    title: 'American Hamburger',
    description: 'Fried eggs, Steak, baked potato or french fries side of vegetables',
    price: 25
  },
]

var reviewsData = [
  {
    company: 'The Food Network',
    author: 'Joe Bastiachi',
    authorInfo: 'Winner Of The Chef Masters',
    highlight: '"Best Restaurant in the L.A. area!"',
    review: 'This is a review... The Lab Bunny — One time beauty school suspendee two time college dropout full time lipstick hoarderTheLab Bunny One time beauty school suspendee, two time college dropout full timelipstick ibra. Non-smoker. DTF dropout full time lipstick hoarder'
  },
  {
    company: 'HBO',
    author: 'Joe Bastiachi',
    authorInfo: 'Winner Of The Chef Masters',
    highlight: '"Best Restaurant in the L.A. area!"',
    review: 'This is a review... The Lab Bunny — One time beauty school suspendee two time college dropout full time lipstick hoarderTheLab Bunny One time beauty school suspendee, two time college dropout full timelipstick ibra. Non-smoker. DTF dropout full time lipstick hoarder'
  },
  {
    company: 'CWB',
    author: 'Joe Bastiachi',
    authorInfo: 'Winner Of The Chef Masters',
    highlight: '"Best Restaurant in the L.A. area!"',
    review: 'This is a review... The Lab Bunny — One time beauty school suspendee two time college dropout full time lipstick hoarderTheLab Bunny One time beauty school suspendee, two time college dropout full timelipstick ibra. Non-smoker. DTF dropout full time lipstick hoarder'
  },
  {
    company: 'NBC',
    author: 'Joe Bastiachi',
    authorInfo: 'Winner Of The Chef Masters',
    highlight: '"Best Restaurant in the L.A. area!"',
    review: 'This is a review... The Lab Bunny — One time beauty school suspendee two time college dropout full time lipstick hoarderTheLab Bunny One time beauty school suspendee, two time college dropout full timelipstick ibra. Non-smoker. DTF dropout full time lipstick hoarder'
  },
  {
    company: 'El New York Times',
    author: 'Aqui ya no sirve',
    authorInfo: 'Quien sabe porque',
    highlight: 'Gran duda in the L.A. area!',
    review: 'Esto es el review'
  }
]

var randomQuoteData = [
  {
    author: 'Johny',
    quote: 'Good Painting is like good cooking it can be tasted, but not explained'
  },
  {
  author: 'Raul',
  quote: 'Give me pizza or give me death'
  },
  {
  author: 'Cindy',
  quote: `Can not live without my pizza`
  }
]

export const globalState = {
  count: 0,
  companyInfo,
  specialMenuData,
  reviewsData,
  randomQuoteData,
  reviewStatus: {
      currentReview: 0,
  }
}
