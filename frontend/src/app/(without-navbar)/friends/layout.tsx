// import Footer from '@/components/friends/Footer'
import Footer from '@/components/footer/Footer'
import React from 'react'

const layout = ({children}: {children: React.ReactElement}) => {
  return (
    <div>
      {children}
      <div>
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default layout
