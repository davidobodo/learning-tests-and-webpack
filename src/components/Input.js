import React, { useState } from 'react';
import { InputContainer } from './style';



const Input = ({ type, name, placeholder, value, handleOnChange, handleOnBlur, hasError, errorMessage, title }) => {
    const [focus, setFocus] = useState(false)



    return (
        <InputContainer focus={focus}>
            <input
                id={title}
                className={hasError ? 'input-field error' : 'input-field'}
                type={type}
                name={name}
                aria-label={placeholder}
                placeholder={placeholder}
                value={value}
                onChange={handleOnChange}
                onBlur={handleOnBlur}
                onFocus={() => setFocus(true)}
                data-testid="input-field" />
            <label
                htmlFor={title}
                className='input-label'
                data-testid="input-label">{title}</label>
            {hasError && <h6 className='error-message'><span>!</span>{errorMessage}</h6>}
        </InputContainer>
    )
}

export default Input