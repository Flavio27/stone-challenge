export const CLIENTS_INITAL_STATE = [{
  id: 0,
  commercial_name: '',
  business_type: '',
  tpv: 0,
  address: {
    street: '',
    lat: 0,
    lng: 0
  },
  satisfaction: 0,
  last_visit: '',
  visit_today: 0,
  percentage_migration: 0
}]

export const INITIAL_LEADS = [{
  id: 1,
  commercial_name: '',
  business_type: '',
  tpv: 0,
  address: {
    street: '',
    lat: 0,
    lng: 0
  },
  visit_numbers: 0,
  negotiation_status: '',
  last_visit: '',
  visit_today: false,
  send_proposal: false,
  client_id: ''
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
    leads: false,
    qualifications: false,
  },
  newLead: {
    screen: false,
    address: '',
    position: { lat: '', lng: '' },
    clickOn: false,
  },
  alert: false,
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