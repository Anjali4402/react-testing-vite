import React from "react";


export default class Users extends React.Component{
    

    getUsersList(a:string){
        return a+" extra Test"
    };

    render(): React.ReactNode {

        return(
            <div>
                <h2>Users Class Component</h2>
                <h2>Username : {this?.props?.name}</h2>
            </div>
        )
    }


}