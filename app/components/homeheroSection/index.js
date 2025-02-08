import React from 'react'
import Button from '../../(main)/components/commons/button/index';
import Image from 'next/image';

const HomeHeroSection = ({ bannerData }) => {
    return (
        <div>
            <div className=''>
                {bannerData && bannerData.map((item, index) => {
                    const { title, description, Titletag, button, image, link, variant } = item;
                    const TitleTagComponent = Titletag || 'h2';

                    return (
                        <div key={index} className='flex flex-col items-center justify-center w-full relative z-10' >
                            <div className='bg-black/30 py-[210px] md:py-[300px] lg:py-[358px] px-8 w-full max-w-[1920px] absolute inset-0 -z-10'>
                            </div>
                            <div className='w-full max-w-[983px] h-full min-h-[880px] mx-auto flex flex-col items-center justify-center'>
                                {title && <TitleTagComponent className='text-center font-bold font-Dosis text-white' >{title}</TitleTagComponent>}
                                {description && <p className='text-white text-center font-OpenSans SecondaryDescription pt-[30px] w-full max-w-[648px]'>{description}</p>}
                                {button &&
                                    <div className='pt-[40px]' >
                                        <Button label={button} href={link} variant={variant} />
                                    </div>
                                }
                            </div>
                            <Image src={image} alt='image' width={1920} height={1063} priority loading='eager' className='absolute inset-0 w-full max-w-[1920px] h-[1063px] -z-10' />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default HomeHeroSection
