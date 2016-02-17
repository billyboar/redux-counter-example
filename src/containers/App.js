import React, { Component, PropTypes } from 'react';
import { Counter } from '../components/counter';
import { connect } from 'react-redux';

//this function makes it possible to access value from our Counter component
//make sure you read comment for the last line of code
const mapStateToProps = (state) => {
    //since we are only storing numbers in our store
    //we are just returning state with a key named value (our Counter component has a prop called value)
    return {
        value: state
    }
}

//this will make it possible to fire dispatchers from our Counter component
const mapDispatchToProps = (dispatch) => {
    return {
        //this will trigger addition action
        onAddition: () => {
            dispatch({
                type: 'addition'
            });
        },
        onSubstraction: () => {
            dispatch({
                type: 'substraction'
            });
        }
    }
}

//most important thing of all; you shouldn't forget to connect react with connect function
//it will automatically create a react element that will contain our Counter component and
//will be subscribed to our store automatically (so it will update the view).
export const App = connect(mapStateToProps, mapDispatchToProps)(Counter);
