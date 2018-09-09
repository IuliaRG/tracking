import { filteredConstants } from '../_constants';
import { trackingTransporService as  trackingTransportService } from '../_services';

export const trackingTransportActions = {
    getTransportTrackingData,
    addTransportTrackingData
   
};


function getTransportTrackingData() {
    return dispatch => {
        dispatch(request());
        trackingTransportService.getTransportTrackingData().then(
            data => dispatch(success(data)),
            error => dispatch(failure(error))
        );
    };

    
    function request() { return { type: filteredConstants.TYPE_OF_TRACHING_REQUEST } }
    
    function success(data) {
        
        return { type: filteredConstants.TYPE_OF_TRACHING_SUCCESS, data } }
    function failure(error) {
         return { type: filteredConstants.TYPE_OF_TRACHING_FAILURE, error } }
}
function addTransportTrackingData(body) {
    return dispatch => {
        dispatch(request());
        trackingTransportService.addTransportTrackingData(body).then(
            data => dispatch(success(data)),
            error => dispatch(failure(error))
        );
    };

    
    function request() { return { type: filteredConstants.TYPE_OF_TRACHING_REQUEST } }
    
    function success(data) {
        
        return { type: filteredConstants.TYPE_OF_TRACHING_SUCCESS, data } }
    function failure(error) {
         return { type: filteredConstants.TYPE_OF_TRACHING_FAILURE, error } }
}
