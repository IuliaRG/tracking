import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './SmartComponent.scss';
import Loader from '../loader/Loader';
import { filteredActions } from '../../_actions';

class SmartComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.toggleList = this.toggleList.bind(this);
    }

    componentDidMount() {
        this.props.getTypeOfBusiness();
    }

    toggleList(){

    }

    render() {
        const { typeOfBusiness } = this.props;
        return (
            <div>
                {typeOfBusiness.data && <div>
                    component first  type of business: {typeOfBusiness.data[0].name}
                </div>}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { typeOfBusiness } = state;
    return {
        typeOfBusiness,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        getTypeOfBusiness: filteredActions.getTypeOfBusiness,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SmartComponent);