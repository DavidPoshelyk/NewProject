import React from "react";




export const ProfileInfo = (props:any) => {
    console.log(props)
    return (
        <div>
            <div>
            <img src={props.photos.small}/>
            </div>
            <div>
              <div> Name: <b>{props.fullName}</b></div>
                <div>Status:{props.aboutMe}</div>
                <div>
                    <h3> contacts </h3>
                    <li>{props.contacts.github}</li>
                    <li>{props.contacts.website}</li>
                    <li>{props.contacts.facebook}</li>
                    <li>{props.contacts.vk}</li>
                </div>
            </div>


    </div>
    )
}
