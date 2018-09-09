import React from 'react';
import packageJson from '../../../package.json';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { filteredActions } from '../../_actions';
import { trackingTransportActions } from '../../_actions';
import './home.scss';
import TopBar from '../../_components/top_bar/TopBar';
import SmartComponent from '../../_components/SmartComponent/SmartComponent';
import TrackingTransportComponent from '../../_components/TrackingTransportComponent/TrackingTransportComponent';
class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.chaseImgOpenClicked = this.chaseImgOpenClicked.bind(this);
    }

    componentDidMount() {
        this.props.getGridProducts();
        this.props.getTypeOfBusiness();
        this.props.getTransportTrackingData();
    }

    chaseImgOpenClicked(){
    }

    render() {
        const { user, users, gridProducts, typeOfBusiness, trackingTransport} = this.props;
        return (
            
            <div>
                <TopBar chaseImgClicked={this.chaseImgOpenClicked}/>
                {typeOfBusiness.data && <div>
                    page first  type of business: {typeOfBusiness.data[0].name}
                </div>}
                <SmartComponent/>
                aaa
                <TrackingTransportComponent/>
                sss
                <div>v{packageJson.version}</div>
            </div>
             
            
           
          
           
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication, gridProducts, typeOfBusiness,trackingTransport } = state;
    const { user } = authentication;
    return {
        user,
        users,
        gridProducts,
        typeOfBusiness,
        trackingTransport,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        getGridProducts: filteredActions.getGridProducts,
        getTypeOfBusiness: filteredActions.getTypeOfBusiness,
        getTransportTrackingData: trackingTransportActions.getTransportTrackingData,
    }, dispatch);
}

const connectedHomePage = connect(mapStateToProps, matchDispatchToProps)(HomePage);
export { connectedHomePage as HomePage };