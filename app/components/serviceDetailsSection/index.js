import Image from 'next/image'
import React from 'react'

const ServiceDetails = ({ deatilsData }) => {
    const { title, listItem, button, imageAndvideo } = deatilsData || {}
    return (
        <div>
            <div className='container'>
                <div className=''>
                    <div>
                        <h3>{title}</h3>
                        <button>{button}</button>
                        {listItem && listItem.map((item, index) => {
                            return (
                                <div key={index}>
                                    {item.list}
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        {
                            imageAndvideo && imageAndvideo.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Image src={item.item} alt='' width={100} height={100} />

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetails
