import { useState } from "react";

function ValidatedShoppingListForm({ addItem }) {
    const [formData, setFormData] = useState({ product: '', quantity: 0 });
    const [productIsValid, setProductIsValid] = useState(false);

    const validate = (product) => {
        if (formData.product.length === 0) {
            setProductIsValid(true);
        } else {
            setProductIsValid(true);
        }
    };

    const handleChange = (evt) => {
        if (evt.target.name === 'product') {
            validate(evt.target.value);
        }
    }

    const handleChange = (evt) => {
        validate();
        setFormData((currData) => {
            return {
                ...currData,
                [evt.target.name]: evt.target.value,
            };
        });
    };

    const handleSubmit = (e) => {
        if (productIsValid) {
            e.preventDefault();
            addItem(formData);
            setFormData({ product: '', quantity: 0 });
            setProductIsValid(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="product">商品名</label>
            <input
                type="text"
                name="product"
                placeholder="商品名"
                id='product'
                onChange={handleChange}
                value={formData.product}
            />
            {!productIsValid && (
                <p style={{ color: 'red' }}>商品名を空にすることはできません</p>
            )};

            <label htmlFor="quantity">数量</label>
            <input
                type="number"
                name="quantity"
                placeholder="数量"
                id='quantity'
                onChange={handleChange}
                value={formData.quantity}
            />
            <button disabled={!productIsValid}>商品を追加</button>
        </form>
    );
}

export default ValidatedShoppingListForm;