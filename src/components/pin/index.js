import React from 'react'
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';

function Pin({info}) {
  return (
    <div>
      {info.commercial_name}
      <PersonPinCircleIcon color="error"/>
    </div>
  )
}

export default Pin
