import { useState } from "react";

const ProductForm = ({handleProducts}) => {
    const [error, setError] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        // console.log(name, price, quantity);
        
        // validation
        if(name.length <= 0){
            setError('Please provide a product name');
            return;
        }
        else if(price.length === 0){
            setError('Provide a price for this products');
            return;
        }
        else if(price <= 0){
            setError('Price can not be zero or negative');
            return;
        }
        
        const newProduct = {
            name,
            price,
            quantity
        }
        handleProducts(newProduct);
    }
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" />
                <br />
                <input type="text" name="price" placeholder="Price" />
                <br />
                <input type="text" name="quantity" placeholder="Quantity" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <div>
                <p style={{color: 'red'}}>{error}</p>
            </div>
        </div>
     );
}
 
export default ProductForm;