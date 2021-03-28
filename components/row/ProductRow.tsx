import { IProduct } from '../../declarations/product.interface';
import ProductCard from '../ProductCard';

export default (props) => {
    const {title} = props;
    const image = {
        url: "/sofa.png",
        alt: "placeholder"
    }

    const location = {
        name: "New Zealand",
        url: "/new-zealand.png",
        alt: "New Zealand"
    }

    return (
        <div className="py-4">
            <div className="container mx-auto mb-4 ">
                <h2 className="font-bold text-4xl">{title}</h2>
            </div>
            <div className="flex">
                <ProductCard title="Sola Sofa" price="499" location={location} image={image} />
                <ProductCard title="Sola Sofa" price="4999" location={location} image={image} />
                <ProductCard title="Nutritious Neutrons" price="4999" location={location} image={image} />
            </div>
        </div>
    )
}