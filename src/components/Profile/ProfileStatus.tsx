import React, {ChangeEvent} from "react";


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
        this.props.updateStatusThunk(this.state.statusText)
    }
    inputText = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            statusText: e.currentTarget.value
        })
    }


    render() {
        return (
            <div>
                {this.state.editMode &&
                <div>
                    <input  autoFocus onDoubleClick={this.deactivateEditMode} onBlur={this.deactivateEditMode} type='text' onChange={(e) => this.inputText(e)}/>
                </div>}
                {!this.state.editMode &&
                <div onDoubleClick={this.activateEditMode}>
                    <span>{this.props.status}</span>
                </div>}
            </div>


        )
    }
}