import Product from "./Product";

export default function AllProducts(props) {

    const {products, onAdd} = props;

    return (
        <main className="block col-2">
            <h2>Products</h2>
            <hr/>
            <div className="row">
                {products.map( (product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>

        </main>
    );
}