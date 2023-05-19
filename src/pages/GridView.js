import React from 'react'
import GridMain from '../components/GridView/GridMain'
import Header from '../components/Shared/Header'
import Footer from '../components/Shared/Footer'

function GridView() {
  return (
<>
    <div>
    <Header />
        <GridMain  />
        <Footer />
    </div>
</>
  )
}

export default GridView
