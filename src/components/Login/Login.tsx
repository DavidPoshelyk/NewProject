import React from 'react';
import LoginForm from "./LoginForm";



export function Login  () {
    const onSubmit = (formData:any) =>{
        console.log(formData)

    }
    return (
            <div>
                <h1>Login</h1>
                <LoginForm onSubmit={onSubmit}/>
            </div>
        );
    }




