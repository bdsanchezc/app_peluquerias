import React from "react";

export const InputRadio = ({inputName, onChange, options, error, question}) => {

    return (
        <div className="my-5 w-full">
            <p className="mb-2 font-bold">{question}</p>
            {
                options.map( option => (
                    <label key={option.idInput} htmlFor={option.idInput} className="mr-4">
                        <input 
                            type="radio" 
                            name={inputName}
                            id={option.idInput}
                            value={option.value}
                            onChange={onChange}
                            className="mr-2"
                        />
                    {option.label}
                    </label>
                ))
            }
            <span className="text-red-400 text-sm block">{error}</span>
        </div>
    );
};
