import { useState } from 'react';
import ValidatedShoppingListForm from './ValidatedShoppingListForm';
import { v4 as uuid } from 'uuid';

function ShoppingList() {
    const [items, setItems] = useState([
        { id: uuid(), product: 'Banana', quantity: 8 },
    ]);

    const addItem = (item) => {
        setItems((currItems) => {
            return [...currItems, { ...item, id: uuid() }];
        });
    };

    return (
        <div>
            <ul>
                {items.map((i) => (
                    <li key={i.id}>
                        {i.product} - {i.quantity}
                    </li>
                ))}
            </ul>
            <ValidatedShoppingListForm addItem={addItem} />
        </div>
    )
}

export default ShoppingList;