import React, { useState } from 'react';
import './styles.scss';


const CreateItem = ({ addItem }) => {

    const [item, setItem] = useState("");

    const handleInputChange = (e) => {
        const value = e.target.value;
        setItem(value);
    }

    const handleKeyPressInput = (e) => {
        const value = e.target.value;
        if (e.key === 'Enter' && value !== "") {
            addItem(value);
            setItem("");
        }
    }

    return (
        <div className="create-item-wrapper">
            <input
                className="create-item-input"
                placeholder="Add new item ..."
                type="text"
                onChange={(e) => handleInputChange(e)}
                onKeyPress={(e) => handleKeyPressInput(e)}
                value={item} />
        </div>
    )
}

export default CreateItem;