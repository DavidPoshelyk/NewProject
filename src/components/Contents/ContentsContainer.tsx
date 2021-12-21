import React, {ChangeEvent} from "react";
import {MyInfo} from "./MyInfo.";
import {Posts} from "./Posts";
import { AddPostActionCreator, UpdateNewTextPostActionCreator} from "../../Redux/Posts-reducer";
import {Contents} from "./Contents";






export function ContentsContainer({dispatch,state,...props}: any) {

    let Push = () => {
        dispatch(AddPostActionCreator());
        dispatch(UpdateNewTextPostActionCreator(''))
    }
    let onChangePost = (e:ChangeEvent<HTMLTextAreaElement> ) => {
        dispatch(UpdateNewTextPostActionCreator(e.currentTarget.value))

    }

    return (
        <div>
                <MyInfo data={state.SettingsReducer}/>
                <Contents  value={state.PostsReducer.Newtextpost} Push={Push} onChangePost={onChangePost}  />
                <Posts data={state.PostsReducer.data}/>

        </div>

    )}








