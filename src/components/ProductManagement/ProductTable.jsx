const ProductTable = ({products}) => {
    return ( 
        <div>
            <h3>Total Products: {products.length}</h3>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, i)=> <tr key={i}>
                        <td>{i+1}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td></td>
                    </tr>)
                    }
                </tbody>
            </table>       
        </div>
     );
}
 
export default ProductTable;