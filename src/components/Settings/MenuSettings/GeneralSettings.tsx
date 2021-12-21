import s  from './BlocSettings.module.css'
import SettingsReducer, {SaveGeneralSettings,
    UpdateNewTextGeneralEducation,
    UpdateNewTextGeneralMarried,
    UpdateNewTextGeneralMyAge, UpdateNewTextGeneralMyEmail
} from "../../../Redux/Settings-reducer";
import {ChangeEvent} from "react";




function GeneralSettings({state,dispatch,...props}:any) {

     const ChangeMyAge = (e:ChangeEvent<HTMLTextAreaElement>) => {
         let text = e.currentTarget.value
         dispatch(UpdateNewTextGeneralMyAge(text))

     }
     const ChangeMarried = (e:ChangeEvent<HTMLTextAreaElement>) => {
         let text = e.currentTarget.value
         dispatch(UpdateNewTextGeneralMarried(text))
     }
     const ChangeEducation = (e:ChangeEvent<HTMLTextAreaElement>) => {
         let text = e.currentTarget.value
         dispatch(UpdateNewTextGeneralEducation(text))
     }
     const ChangeMyEmail = (e:ChangeEvent<HTMLTextAreaElement>) => {
         let text = e.currentTarget.value
         dispatch(UpdateNewTextGeneralMyEmail(text))
     }
      const Save = () => {
          dispatch(SaveGeneralSettings())
          dispatch(UpdateNewTextGeneralMyAge(''))
          dispatch(UpdateNewTextGeneralMarried(''))
          dispatch(UpdateNewTextGeneralEducation(''))
          dispatch(UpdateNewTextGeneralMyEmail(''))
}


    console.log(state.GeneralSettings)


    return (
        <div className={s.GeneralSettings}>
            <div>
                <span>My age</span>
                <textarea value={state.SettingsReducer.myAge.NewTextGeneralMyage} onChange={(e) =>ChangeMyAge(e) } placeholder={state.SettingsReducer.myAge.data}/>
                <input   checked={state.SettingsReducer.myAge.isDone} type='checkbox'/>
            </div>
            <div>
                <span>Married</span>
                <textarea value={state.SettingsReducer.married.NewTextGeneralMarried} onChange={(e)=> ChangeMarried(e) } placeholder={state.SettingsReducer.married.data}/>
                <input  checked={state.SettingsReducer.married.isDone} type='checkbox' />
            </div>
            <div>
                <span>Education</span>
                <textarea  value={state.SettingsReducer.education.NewTextGeneralEducation} onChange={(e)=> ChangeEducation(e) } placeholder={state.SettingsReducer.education.data}/>
                <input  checked={state.SettingsReducer.education.isDone} type='checkbox' />
            </div>
            <div>
                <span>My Email</span>
                <textarea value={state.SettingsReducer.Email.NewTextGeneralMyEmail} onChange={(e) => ChangeMyEmail(e) } placeholder={state.SettingsReducer.Email.data}/>
                <input  checked={state.SettingsReducer.Email.isDone} type='checkbox' />
            </div>
            <button onClick={()=> Save()}>SAVE</button>
        </div>

    )

}

export default GeneralSettings



