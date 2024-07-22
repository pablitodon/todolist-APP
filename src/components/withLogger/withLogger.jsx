import React from "react";


const withLogger = (WrappedComponent) => {

    return (props) => {
        const logAction  = (action) => {
            const date = new Date();
            const time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            console.log(`${time} Action : ${action}`);
        }

        return <WrappedComponent
         {...props}  
         logAction={logAction}
        
          />
    }

}



export default withLogger;