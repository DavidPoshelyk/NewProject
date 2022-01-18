import s from  "./Header.module.css"

export function Header(props:any) {
    console.log(props)
    return (
        <div className={s.header}>
            <img className={s.imagesH} src="https://cdn.logo.com/hotlink-ok/logo-social.png"/>
            {props.data.isAuth?<div>{props.data.login}</div>:<div>Login</div> }
        </div>
    )
}


