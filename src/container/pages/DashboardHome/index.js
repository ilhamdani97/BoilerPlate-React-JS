
import React, { Component } from 'react';


import { Button } from 'components';
// style
import './styles.scss';

class DashboardHome extends Component {
    _isMounted = false;

    state = { };

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        
        return (
            <div>
                <p>Home Page</p>
                <Button
                    type="button"
                    variant='secondary'
                    family='cozy'
                >
                    Login
                </Button>
            </div>
            
        );
    }
    }

export default DashboardHome;