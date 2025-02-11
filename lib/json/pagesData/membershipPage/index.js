export const membershipBanner = {
    Breadcrumb: "Home / Membership / Platinum",
    title: "Platinum",
}

export const premiummembarship = [

    {
        title: "Premium Membership Benefits",
        listItem: [
            { list: "65 Hours of Massage Time valid for 12 months (shared by two persons)." },
            { list: "Access to any treatment at any branch, available on weekdays and weekends." },
            { list: "Each session must be a minimum of 1 hour." },
            { list: "Includes Steam & Jacuzzi (T&Cs apply)." },

        ],
        button: "Book Now",
        variant: "grayButton",
        link: "/book-appointment",
        imageAndvideo1: [
            { type: "image", item: "/images/membershipimage1.webp" },  // Updated to .webp format
            { type: "image", item: "/images/membershipimage2.webp" },  // Updated to .webp format
        ],
        imageAndvideo2: [
            { type: "image", item: "/images/membershipimage3.webp" },  // Updated to .webp format
            { type: "image", item: "/images/membershipimage4.webp" },  // Updated to .webp format
        ],
        alignment: "right",
    }
]

export const tretment = {
    title: "Our Special Treatments",
    images1: [
        { type: "image", item: "/images/tretmentImage1.webp" },  // Updated to .webp format
        { type: "image", item: "/images/tretmentImage2.webp" },  // Updated to .webp format
    ],
    images2: [
        { type: "image", item: "/images/tretmentImage3.webp" },  // Updated to .webp format
        { type: "image", item: "/images/tretmentImage4.webp" },  // Updated to .webp format
    ],
    priceeList: [
        {
            title: "Sauna Relax",
            price: '₹ 499.00',
            description: "Experience ultimate relaxation and detoxification with our rejuvenating sauna sessions."
        },
        {
            title: "Pedicure",
            price: '₹ 299.00',
            description: "Rejuvenate your feet with a soothing pedicure that pampers, exfoliates, and nourishes for soft and healthy skin."
        },
        {
            title: "Shaving with Face Wash",
            price: '₹ 99.00',
            description: "A refreshing grooming experience combining a clean shave with a revitalizing face wash for smooth, radiant skin."
        }
    ],
    button: "View More",
    variant: "grayButton"
}
