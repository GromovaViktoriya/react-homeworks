import {useState} from "react";

export const ItemCart = () => {
    const [cart, setCart] = useState([
        {id: 1, title: "Футболка", count: 1},
        {id: 2, title: "Кепка", count: 2},
    ]);

    const plusOneHandler = (id) => {
        const item = cart.find((item) => item.id === id);
        if (item) {
            setCart((prev) => prev.map((item) => item.id === id
                ? {...item, count: item.count + 1}
                : item));
        }
    }

    const deleteItemHandler = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const clearCartHandler = () => {
        setCart([])
    }

    return (
        <div>
            <div>
                <h3>Корзина товаров</h3>
                {cart.map(item => {
                    return <div key={item.id} style={{display: 'flex', gap: '10px'}}>
                        <p>{item.title}</p>
                        <p>{item.count}</p>
                        <button onClick={() => plusOneHandler(item.id)}>+1</button>
                        <button onClick={() => deleteItemHandler(item.id)}>Удалить</button>
                    </div>
                })}
            </div>
            <button onClick={clearCartHandler}>Очистить корзину</button>
        </div>
    )
}