import Image from 'next/image'
import React from 'react'

const ServiceInnerBanner = () => {
    return (
        <div>
            <div>
                <Image src={image} alt='' />
                <h3>{title}</h3>
                <p>{Breadcrumb}</p>
            </div>
        </div>
    )
}

export default ServiceInnerBanner
