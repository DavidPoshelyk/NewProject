import React from "react";
import s from './Nav_Container.module.css'
import MenuListComposition from "../NavBar/Nav";

export default function NavContainer() {
    return (
        <>
            <div className={s.NavContainer}>
                <MenuListComposition/>
            </div>
        </>
    );
}
