import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './TrackingTransportComponent.scss';
import Loader from '../loader/Loader';
// import DateTimePicker from 'react-datetime-picker';
import DayPicker from 'react-day-picker/DayPicker';
import { formatDate, parseDate } from 'react-day-picker/moment';
import moment from "moment";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { trackingTransportActions } from '../../_actions';
//import {TransportInformation} from '../../_helpers/transportInformation';

import NumericInput from 'react-numeric-input';


class TrackingTransportComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state  = {
       data:{
        speed:0,
                
        
        time:""
       }
                
        };
        this.toggleList = this.toggleList.bind(this);
        this.achieveDateChange = this.achieveDateChange.bind(this);
        this.changeSpeed=this.changeSpeed.bind(this);
        this.sendTransportInformation= this.sendTransportInformation.bind(this)

    }
  //  onChange = date => this.setState({ date })
  onChange()
  {

  }
    handleChange(date) {
        this.setState({
          startDate: date
        });
      }
    componentDidMount() {
        this.props.getTransportTrackingData();
    }

    achieveDateChange(day) {
        // var data = this.state.data
        // this.setState({
        //     time: "09/04/2018"
        //   });
          var data = this.state.data
          data.time="09/04/2018";
          this.setState({ ...this.state, data });
        
    }
    changeSpeed(value)
    { 
        var data = this.state.data
        data.speed=value;
        this.setState({ ...this.state, data });
      
    }
    
    toggleList(){

    }
    sendTransportInformation()
    {
        this.props.addTransportTrackingData(this.state);
    }
    render() {
        const { trackingTransport } = this.props;
        return (
            <div>
                {trackingTransport.data && <div>
                    component first  type of speed: {trackingTransport.data[4].speed}
                </div>}
                
                {/* <DateTimePicker
                    onChange={this.onChange.bind(this)}
                    value={this.state.date}
                /> */}
 <div>
                <DayPickerInput 
                                                    overlayComponent={this.customFromOverlay}
                                                    placeholder="Start Date"
                                                    showOverlay={false}
                                                    formatDate={formatDate}
                                                    parseDate={parseDate}
                                                    hideOnDayClick={true}
                                                    dayPickerProps={{
                                                        numberOfMonths: 1,
                                                        
                                                    }}
                                                    onDayChange={this.achieveDateChange}
                                                />
                                                
    </div>
    <div>
    <NumericInput min={0}  onChange ={this.changeSpeed}/>
        </div>
        <div className="submit-button">
                        <button
                         onClick={this.sendTransportInformation}
                            type="submit"
                            className="bp3-button bp3-intent-primary save-recipe"
                        >
                            Save
            </button>
                    </div>
            </div>
            
        );
    }
}

function mapStateToProps(state) {
    const { trackingTransport } = state;
    return {
        trackingTransport,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        getTransportTrackingData: trackingTransportActions.getTransportTrackingData,
        addTransportTrackingData: trackingTransportActions.addTransportTrackingData,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(TrackingTransportComponent);