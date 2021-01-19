import React from 'react'
import ClientInfo from '../clientInfo'
import LeadInfo from '../leadinfo'

function CardInfo({ client }) {

  return (
    <>
      {
        client.negotiation ?
          <LeadInfo client={client} /> :
          <ClientInfo client={client} />
      }
    </>
  )
}

export default CardInfo
