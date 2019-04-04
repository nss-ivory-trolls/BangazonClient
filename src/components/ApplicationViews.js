import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import DataManager from '../modules/DataManager';
// import Profile from '../components/Profile';

export default class ApplicationViews extends Component {

    state = {
        customer: [],
        order: [],
        product: [],
        paymenttype: []
    }

    handleGetAlls = (stateName) => {
        return (DataManager.dataManager({
            "dataSet": stateName,
            "fetchType": "GET-ALL"
        })
        .then(dataSet => {
            this.setState({
                [stateName]: dataSet
            });
        }));
    }

    componentDidMount() {
        Object.keys(this.state).forEach(stateName => {
            this.handleGetAlls(stateName);
        });
    }

    render() {
        return (
            <React.Fragment>
                <p>Hello bitches</p>
            </React.Fragment>
        );
    }

}
