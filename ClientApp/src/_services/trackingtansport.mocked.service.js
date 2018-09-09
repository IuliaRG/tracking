import { authHeader, config, handleResponse, handleError, getQueryString, createRequest, getTextResponse, mockRequest } from '../_helpers';

export const trackingTransportMockedService = {
    getTransportTrackingData
  
};
function getTransportTrackingData() {
    return mockRequest([
        {
            id: 1,
            speed: 1
        }
        ]);
}

