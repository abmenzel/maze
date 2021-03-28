import Image from 'next/image'
import Button from '../components/Button'

export default (props) => {
    const { title, price, vendor }: { title: string, price: string, vendor: string} = props;

    const image: { url: string, alt: string } = {
        url: props.image?.url ? props.image.url : '/placeholder.png',
        alt: props.image?.alt ? props.image.alt : 'Image does not exist'
    }

    const location: { name: string, url: string, alt: string } = {
        name: props.location?.name ? props.location.name : 'The World',
        url: props.location?.url ? props.location.url : '/placeholder.png',
        alt: props.location?.alt ? props.location.alt : 'Location not specified'
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
                        <p>from { location.name }</p>
                        <p>by { vendor }</p>
                        <p>{ price }</p>
                    </div>
                    <Button className="mt-2">View</Button>
                </div>
                <Image
                    src={ location.url }
                    alt={ location.alt }
                    width={ 75 }
                    height={ 75 }
                    objectFit="contain"
                />
            </div>

        </div>
    )
}