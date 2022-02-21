import React from "react";
import s from './Content_Container.module.css'
import NavContainer from "../NavContainer/Nav_Container";

export interface LayoutProps  {
    children: React.ReactNode
}

function ContentContainer(props: LayoutProps) {
    return (
        <>
            <NavContainer/>
            <div className={s.contentContainer}>
                {props.children}
            </div>

        </>
    );
}
export default ContentContainer