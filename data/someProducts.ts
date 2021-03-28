import { IProduct } from "../declarations/product.interface";

const someProducts: IProduct[] = [
    {
        title: "Sola Sofa",
        type: "couch",
        handle: "sola-sofa",
        description: "Sola Sofa good",
        variants: [
            {
                price: 5000,
                options: [
                    {
                        name: "color",
                        value: "orange"
                    }
                ]
            }
        ],
        vendor: {
            name: "Kepler",
            location: {
                image: "/new-zealand.png",
                country: "New Zealand",
                region: "South",
                city: "Sydney"
            }
        }
    },
    {
        title: "Nutrient Couch",
        type: "couch",
        handle: "nutrient-couch",
        description: "Great couch",
        variants: [
            {
                price: 7000,
                images: [
                    {
                        url: "/couch-orange.png",
                        alt: "Sweet chair from Istanbul"
                    }
                ],
                options: [
                    {
                        name: "color",
                        value: "orange"
                    }
                ]
            },
            {
                price: 4000,
                images: [
                    {
                        url: "/couch-blue.png",
                        alt: "Sweet chair from Istanbul"
                    }
                ],
                options: [
                    {
                        name: "color",
                        value: "blue"
                    }
                ]
            },
            {
                price: 4000,
                images: [
                    {
                        url: "/couch-green.png",
                        alt: "Sweet chair from Istanbul"
                    }
                ],
                options: [
                    {
                        name: "color",
                        value: "green"
                    }
                ]
            },
        ],
        vendor: {
            name: "Houston",
            location: {
                image: "/denmark.png",
                country: "Denmark",
                region: "Zealand",
                city: "Copenhagen"
            }
        }
    },
    {
        title: "Sweet Chair",
        type: "chair",
        handle: "sweet-chair",
        description: "Chair from Istanbul",
        variants: [
            {
                price: 10000,
                images: [
                    {
                        url: "/chair.png",
                        alt: "Sweet chair from Istanbul"
                    }
                ],
                options: [
                    {
                        name: "size",
                        value: "S"
                    }
                ]
            },
            {
                price: 5000,
                images: [
                    {
                        url: "/chair.png",
                        alt: "Sweet chair from Istanbul"
                    }
                ],
                options: [
                    {
                        name: "size",
                        value: "XL"
                    }
                ]
            }
        ],
        vendor: {
            name: "Helga Merit",
            location: {
                image: "/israel.png",
                country: "Israel",
                region: "South",
                city: "Tel Aviv"
            }
        }
    }
]

export default someProducts;