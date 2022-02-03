import React from "react";


export class ProfileStatus extends  React.Component<any, any> {


     state = {
         editMode: false
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
    }


    render() {

         return (
            <div>
                {this.state.editMode &&  <div onDoubleClick={this.deactivateEditMode}>
                    <input type='text'/>
                </div> }
                {!this.state.editMode &&  <div onDoubleClick={this.activateEditMode}>
                    <span>Hello</span>
                </div> }
            </div>


        )
    }
}