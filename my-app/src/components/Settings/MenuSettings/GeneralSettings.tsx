import s  from './BlocSettings.module.css'
import {SaveGeneralSettings,
    UpdateNewTextGeneralEducation,
    UpdateNewTextGeneralMarried,
    UpdateNewTextGeneralMyAge, UpdateNewTextGeneralMyEmail
} from "../../../Reducer/Settings-reducer";
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





    return (
        <div className={s.GeneralSettings}>
            <div>
                <span>My age</span>
                <textarea value={state.GeneralSettings.myAge.NewTextGeneralMyage} onChange={(e) =>ChangeMyAge(e) } placeholder={state.GeneralSettings.myAge.data}/>
                <input   checked={state.GeneralSettings.myAge.isDone} type='checkbox'/>
            </div>
            <div>
                <span>Married</span>
                <textarea value={state.GeneralSettings.married.NewTextGeneralMarried} onChange={(e)=> ChangeMarried(e) } placeholder={state.GeneralSettings.married.data}/>
                <input  checked={state.GeneralSettings.married.isDone} type='checkbox' />
            </div>
            <div>
                <span>Education</span>
                <textarea  value={state.GeneralSettings.education.NewTextGeneralEducation} onChange={(e)=> ChangeEducation(e) } placeholder={state.GeneralSettings.education.data}/>
                <input  checked={state.GeneralSettings.education.isDone} type='checkbox' />
            </div>
            <div>
                <span>My Email</span>
                <textarea value={state.GeneralSettings.Email.NewTextGeneralMyEmail} onChange={(e) => ChangeMyEmail(e) } placeholder={state.GeneralSettings.Email.data}/>
                <input  checked={state.GeneralSettings.Email.isDone} type='checkbox' />
            </div>
            <button onClick={()=> Save()}>SAVE</button>
        </div>

    )

}

export default GeneralSettings



