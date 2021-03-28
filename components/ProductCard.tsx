import React, {useState} from 'react';
import Image from 'next/image';
import Button from '../components/Button';
import { IProduct } from '../declarations/product.interface';

export default (props) => {
    const product: IProduct = props.product;
    const {title, vendor, variants} = product;
    const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

    const image: { url: string, alt: string } = {
        url: selectedVariant.images?.[0].url ? selectedVariant.images[0].url : '/placeholder.png',
        alt: selectedVariant.images?.[0].alt ? selectedVariant.images[0].alt : 'Image does not exist'
    }

    return (
        <div className="mr-4 p-4 bg-gray-200 rounded-md">
            <Image
                src={ image.url }
                alt={ image.alt }
                width={ 300 }
                height= { 250 }
                objectFit="contain"
                />
            <h5 className="font-bold text-xl text-gray-900">{ title }</h5>
            <div className="flex justify-between">
                <div>
                    <div className="text-gray-500">
                        <p>from { vendor.location.country }</p>
                        <p>by { vendor.name }</p>
                        <p>{ selectedVariant.price }</p>
                    </div>
                    <div className="mt-2 flex">
                        <Button className="mr-2">View</Button>
                        {variants.map((variant,index) => {
                            return <Button className="mr-2" onMouseEnter={() => setSelectedVariant(variant)}>{index}</Button>
                        })}
                    </div>
                </div>
                <Image
                    src={ vendor.location.image }
                    alt={ vendor.location.country }
                    width={ 75 }
                    height={ 75 }
                    objectFit="contain"
                />
            </div>

        </div>
    )
}