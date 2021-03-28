export default (props) => {
    const { title, price, location } : { title: string, price: string, location: string } = props;
    
    return (
        <div className="mr-4 p-4 bg-gray-200 rounded-md">
            <h5 className="font-bold text-xl text-gray-900">{ title }</h5>
            <p className="text-gray-500">from { location }</p>
            <p className="text-gray-500">DKK { price }</p>
        </div>
    )
}