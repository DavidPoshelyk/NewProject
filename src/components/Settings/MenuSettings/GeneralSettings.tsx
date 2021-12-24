import s from './BlocSettings.module.css'
import  {
    SaveGeneralSettings,
    UpdateNewTextGeneralEducation,
    UpdateNewTextGeneralMarried,
    UpdateNewTextGeneralMyAge, UpdateNewTextGeneralMyEmail
} from "../../../Redux/Settings-reducer";
import {ChangeEvent} from "react";
import {StoreContext} from '../../../StoreContext';


function GeneralSettings() {


    return (
        <StoreContext.Consumer>{

            (store) => {
                let state = store.getState()

                const ChangeMyAge = (e: ChangeEvent<HTMLTextAreaElement>) => {
                    let text = e.currentTarget.value
                    store.dispatch(UpdateNewTextGeneralMyAge(text))

                }
                const ChangeMarried = (e: ChangeEvent<HTMLTextAreaElement>) => {
                    let text = e.currentTarget.value
                    store.dispatch(UpdateNewTextGeneralMarried(text))
                }
                const ChangeEducation = (e: ChangeEvent<HTMLTextAreaElement>) => {
                    let text = e.currentTarget.value
                    store.dispatch(UpdateNewTextGeneralEducation(text))
                }
                const ChangeMyEmail = (e: ChangeEvent<HTMLTextAreaElement>) => {
                    let text = e.currentTarget.value
                    store.dispatch(UpdateNewTextGeneralMyEmail(text))
                }
                const Save = () => {
                    store.dispatch(SaveGeneralSettings())
                    store.dispatch(UpdateNewTextGeneralMyAge(''))
                    store.dispatch(UpdateNewTextGeneralMarried(''))
                    store.dispatch(UpdateNewTextGeneralEducation(''))
                    store.dispatch(UpdateNewTextGeneralMyEmail(''))
                }

                return (
                    <div className={s.GeneralSettings}>
                        <div>
                            <span>My age</span>
                            <textarea value={state.SettingsReducer.myAge.NewTextGeneralMyage}
                                      onChange={(e) => ChangeMyAge(e)} placeholder={state.SettingsReducer.myAge.data}/>
                            <input checked={state.SettingsReducer.myAge.isDone} type='checkbox'/>
                        </div>
                        <div>
                            <span>Married</span>
                            <textarea value={state.SettingsReducer.married.NewTextGeneralMarried}
                                      onChange={(e) => ChangeMarried(e)}
                                      placeholder={state.SettingsReducer.married.data}/>
                            <input checked={state.SettingsReducer.married.isDone} type='checkbox'/>
                        </div>
                        <div>
                            <span>Education</span>
                            <textarea value={state.SettingsReducer.education.NewTextGeneralEducation}
                                      onChange={(e) => ChangeEducation(e)}
                                      placeholder={state.SettingsReducer.education.data}/>
                            <input checked={state.SettingsReducer.education.isDone} type='checkbox'/>
                        </div>
                        <div>
                            <span>My Email</span>
                            <textarea value={state.SettingsReducer.Email.NewTextGeneralMyEmail}
                                      onChange={(e) => ChangeMyEmail(e)}
                                      placeholder={state.SettingsReducer.Email.data}/>
                            <input checked={state.SettingsReducer.Email.isDone} type='checkbox'/>
                        </div>
                        <button onClick={() => Save()}>SAVE</button>
                    </div>
                )
            }
        }</StoreContext.Consumer>
    )
}

export default GeneralSettings



