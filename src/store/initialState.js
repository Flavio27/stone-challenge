export const CLIENTS_INITAL_STATE = [{
  id: 0,
  commercial_name: '',
  business_type: '',
  tpv: 0,
  address: [{
    id: 0,
    clienteId: 0,
    city: '',
    street: '',
    lat: 0,
    lng: 0,
    state: '',
  }],
  visits: [{
    id: 0,
    clienteId: 0,
    visits_number: 0,
    last_visit: '',
  }],
}]

export const INITIAL_TENDERS = [{
  id: "",
  commercial_name: "",
  business_type: "",
  tpv: "",
  negotiation: [
    {
      id: "",
      tenderId: "",
      status: "",
      request: false,
      observations: ""
    }
  ],
  address: [
    {
      id: "",
      tenderId: "",
      city: "São Paulo",
      street: "",
      lat: 0,
      lng: 0,
      state: "SP"
    }
  ],
  visit: [
    {
      id: "",
      tenderId: "",
      visits_number: "",
      last_visit: "",
      visit_today: false
    }
  ]
}]

export const INITIAL_SCREENS = {
  funnel: false,
  list: false,
  map: {
    searchBar: true,
    screen: true,
    filterBar: true,
    clientPin: false,
  },
  script: false,
  more: false,
  filter: {
    clients: false,
    tenders: false,
    qualifications: false,
  },
  newLead: {
    screen: false,
    address: '',
    position: {lat: '', lng: ''},
    clickOn: false,
  },
}

export const INITIAL_FILTER = [{
  lead: '',
  establishment: '',
  tpv: ''
}]

export const INITIAL_LOCATION = {
  lat: -23.5564616232912,
  lng: -46.63087491974125,
  zoom: 16
}