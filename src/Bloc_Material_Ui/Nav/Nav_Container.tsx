import React from "react";
import s from './Nav_Container.module.css'

export default function NavContainer(props?:any) {
    return (
        <>
            <div className={s.NavContainer}>
                {props.children}
            </div>

        </>
    );
}
