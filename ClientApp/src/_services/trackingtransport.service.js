import { authHeader, config, handleResponse, handleError, getQueryString, createRequest, getTextResponse, mockRequest } from '../_helpers';

export const trackingTransporService = {
    getTransportTrackingData,
 addTransportTrackingData

    
};
function getTransportTrackingData() {
    return createRequest('', '/trackingtransportdata');
}
function addTransportTrackingData(data) {
    debugger
    return createRequest('', '/trackingtransportdata','POST',data);
}
