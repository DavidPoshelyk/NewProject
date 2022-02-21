import React, {ChangeEvent} from "react";
import  s from './Profile_Bloc.module.css'


export class ProfileStatus extends React.Component<any, any> {

    state = {
        editMode: false,
        statusText: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })

    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        if(this.state.statusText.length > 5 ) {
            this.props.updateStatusThunk(this.state.statusText)
        }
    }
    inputText = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            statusText: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps:Readonly<any>, prevState:Readonly<any>) {
        if(prevProps.status !== this.props.status){
            this.setState({
                statusText: this.props.status
            })
        }
    }


    render() {
        return (
            <div>
                {this.state.editMode &&
                <div>
                    <input  value={this.state.statusText} autoFocus onDoubleClick={this.deactivateEditMode} onBlur={this.deactivateEditMode} type='text' onChange={(e) => this.inputText(e)}/>
                </div>}
                {!this.state.editMode &&
                <div onDoubleClick={this.activateEditMode}>
                    <span className={s.span}>{this.props.status || '-------'}</span>
                </div>}
            </div>


        )
    }
}