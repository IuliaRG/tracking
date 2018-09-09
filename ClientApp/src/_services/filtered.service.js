import { authHeader, config, handleResponse, handleError, getQueryString, createRequest, getTextResponse, mockRequest } from '../_helpers';

export const filteredService = {
    getTypeOfBusiness,
    getGridProducts,
};
function getTypeOfBusiness() {
    return createRequest(requestModel, '/no-api?');
}

function getGridProducts() {
    return createRequest(requestModel, '/no-api?');
}