import React from 'react';

 export  const InputText = ({input, meta, ...props}:any) => {
    const touched = meta.touched
     const error = meta.error
     const warning = meta.warning
    return (
        <div>
            <div> <textarea {...input} {...props}/></div>
            {touched &&
            ((error && <span style={{color:'red'}}>{error}</span>) ||
                (warning && <span style={{color:'red'}}>{warning}</span>))}
        </div>

    );
};

