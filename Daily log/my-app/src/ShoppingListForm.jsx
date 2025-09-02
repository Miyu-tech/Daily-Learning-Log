import { useState } from "react";

function ShoppingListForm({ addItem }) {
    const [formData, setFormData] = useState({ product: '', quantity: 0 });

    const handleChange = (evt) => {
        setFormData((currData) => {
            return {
                ...currData,
                [evt.target.name]: evt.target.value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(formData);
        setFormData({ product: '', quantity: 0 });
    }

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
            <label htmlFor="quantity">数量</label>
            <input
                type="number"
                name="quantity"
                placeholder="数量"
                id='quantity'
                onChange={handleChange}
                value={formData.quantity}
            />
            <button>商品を追加</button>
        </form>
    );
}

export default ShoppingListForm;