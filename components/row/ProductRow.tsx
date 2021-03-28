import ProductCard from '../ProductCard';

export default (props) => {
    const {title} = props;

    return (
        <div className="py-4">
            <div className="container mx-auto mb-4 ">
                <h2 className="font-bold text-4xl">{title}</h2>
            </div>
            <div className="flex">
                <ProductCard title="Sola Sofa" price="499" location="New Zealand" />
                <ProductCard title="Sweet Neutrons" price="5.499" location="Germany" />
                <ProductCard title="Atomic Lamp" price="9.500" location="Australia" />
            </div>
        </div>
    )
}