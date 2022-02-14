import React from "react";
import s from './Content_Container.module.css'

export default function СontentContainer(props?:any) {
    return (
        <>
            <div className={s.СontentContainer}>
                {props.children}
            </div>

        </>
    );
}
