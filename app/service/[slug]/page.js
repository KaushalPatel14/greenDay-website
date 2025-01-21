import ServiceInnerBanner from '../../../app/components/ServiceInnerBanner/index'
import React from 'react'
import { serviceDetails } from '../../../lib/json/pagesData/servicePage/serviceInner/shirodhara/index'

const SearviceInner = () => {
  const BannerData= serviceDetails
  console.log(BannerData,"ss")
  return (
    <div>
      {/* <ServiceInnerBanner /> */}
    </div>
  )
}

export default SearviceInner
