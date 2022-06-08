import React, { Component } from 'react';

function Loading(component) {
    return function WithLoadingComponent({isLoading, data}) {
        if(isLoading) {
            return(
                <p>Loading.....</p>
            )
        } else {
            return (
                <Component data= {data} />
            )
        }
    }
   
}

export default Loading;