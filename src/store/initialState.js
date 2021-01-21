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
  id: 0,
  name: '',
  tpv: 0,
  negotiation: [{
    id: 0,
    tenderId: 0,
    status: '',
    request: false,
    observations: '',
  }],
  address: [{
    id: 0,
    tenderId: 0,
    city: '',
    street: '',
    lat: 0,
    lng: 0,
    state: '',
  }]
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