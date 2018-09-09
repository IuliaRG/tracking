import { filteredConstants } from '../_constants';
import { filteredMockedService as  filteredService } from '../_services';

export const filteredActions = {
    getGridProducts,
    getTypeOfBusiness,
};

function getGridProducts(params) {
    return dispatch => {
        dispatch(request());
        filteredService.getGridProducts().then(
            data => dispatch(success(data, params)),
            error => dispatch(failure(error))
        );
    };

    function request() { return { type: filteredConstants.GET_GRID_PRODUCTS_REQUEST } }
    function success(data, params) { return { type: filteredConstants.GET_GRID_PRODUCTS_SUCCESS, data, params } }
    function failure(error) { debugger
        return { type: filteredConstants.GET_GRID_PRODUCTS_FAILURE, error } }
}
function getTypeOfBusiness() {
    return dispatch => {
        dispatch(request());
        filteredService.getTypeOfBusiness().then(
            data => dispatch(success(data)),
            error => dispatch(failure(error))
        );
    };

    function request() { return { type: filteredConstants.TYPE_OF_BUSINESS_REQUEST } }
    function success(data) { return { type: filteredConstants.TYPE_OF_BUSINESS_SUCCESS, data } }
    function failure(error) { return { type: filteredConstants.TYPE_OF_BUSINESS_FAILURE, error } }
}
