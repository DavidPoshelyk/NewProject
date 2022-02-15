import React from 'react';

 export  const textareaInput = ({input, meta, ...props}:any) => {
    const {touched,error,warning} = meta
     return (
        <div style={{display:'flex', flexDirection:'row'}}>
            <div> <textarea {...input} {...props}/></div>
            {touched &&
            ((error && <span style={{color:'white', background:'red'}}>{error}</span>) ||
                (warning && <span style={{color:'white', background:'red'}}>{warning}</span>))}
        </div>
    );
};

export  const textInput = ({input, meta, ...props}:any) => {
    const {touched,error,warning} = meta
    return (
        <div style={{display:'flex', flexDirection:'row'}}>
            <div > <input type='text' {...input} {...props}/></div>
            {touched &&
            ((error && <span style={{color:'white', background:'red'}}>{error}</span>) ||
                (warning && <span style={{color:'white', background:'red'}}>{warning}</span>))}
        </div>

    );
};



