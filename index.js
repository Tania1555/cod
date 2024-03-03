import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Текущее значение счётчика: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <button onClick={() => setCount(count - 1)}>
                Decrement
            </button>
        </div>
    );
}
const root = createRoot(document.getElementById('root'));
root.render(<Counter />);