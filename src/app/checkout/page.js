"use client"

import React from 'react'
import AddressForm from './AddressForm'
import Checkout from './Checkout'
import Info from './Info'
import InfoMobile from './InfoMobile'
import PaymentForm from './PaymentForm'
import Review from './Review'
import ToggleColorMode from './ToggleColorMode'
// import getCheckoutTheme from './getCheckoutTheme'

const page = () => {
  return (
    <div>
        <Checkout/>
        {/* <Info/> */}
        <InfoMobile/>
        {/* <PaymentForm/> */}
        {/* <Review/> */}
        {/* <ToggleColorMode/> */}
        {/* <getCheckoutTheme/> */}

    </div>
  )
}

export default page