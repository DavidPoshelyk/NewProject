import React from "react";
import s from './Nav_Container.module.css'
import MenuListComposition from "../../Bloc_Material_Ui/Nav_Bar_Bloc/Nav_Bloc";

export default function NavContainer() {
    return (
        <>
            <div className={s.NavContainer}>
                <MenuListComposition/>
            </div>
        </>
    );
}
