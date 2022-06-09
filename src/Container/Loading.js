import React, { Component } from 'react';

function Loading(Component) {
    return function WithLoadingComponent({isLoading, data}) {
        if(isLoading) {
            return(
                
                <center>

                    <h3>loading....</h3>

                </center>

            )
        } else {
            return (
                <Component data= {data} />
            )
        }
    }
   
}

export default Loading;