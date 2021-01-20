import React from 'react'
import BottomAppBar from '../../components/bottomAppBar'
import WalkScript from '../../components/walkScript'

function Script() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignContent: 'center',
      justifyContent: 'center',
    }}>
      
      <WalkScript />
      <BottomAppBar />
    </div>
  )
}

export default Script
