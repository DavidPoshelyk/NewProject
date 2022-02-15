import React from "react";
import s from './Content_Container.module.css'
import NavContainer from "../Nav/Nav_Container";

export default function СontentContainer(props?:any) {
    return (
        <>
            <NavContainer/>
            <div className={s.СontentContainer}>
                {props.children}
            </div>

        </>
    );
}
