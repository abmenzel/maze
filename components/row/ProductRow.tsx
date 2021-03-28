import { IProduct } from '../../declarations/product.interface';
import ProductCard from '../ProductCard';
import products from '../../data/someProducts'

export default (props) => {
    const {title} = props;

    return (
        <div className="py-4">
            <div className="container mx-auto mb-4 ">
                <h2 className="font-bold text-4xl">{title}</h2>
            </div>
            <div className="flex">
                {products.map(product => {
                    return <ProductCard product={product} />
                })}
            </div>
        </div>
    )
}