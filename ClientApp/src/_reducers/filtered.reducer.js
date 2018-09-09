import { filteredConstants, productCategoriesConstants } from '../_constants';

export function gridProducts(state = {}, action) {
    switch (action.type) {
        case filteredConstants.GET_GRID_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
                showContainer: false
            };
        case filteredConstants.GET_GRID_PRODUCTS_SUCCESS:
        return {
                ...state,
                data: action.data,
                params: action.params,
                loading: false,
                showContainer: true
            };
        case filteredConstants.GET_GRID_PRODUCTS_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false,
                showContainer: true
            };
        default:
            return state
    }
}

export function typeOfBusiness(state = {}, action) {
    switch (action.type) {
        case filteredConstants.TYPE_OF_BUSINESS_REQUEST:
            return {
                ...state,
                loading: true,
                showContainer: false
            };
        case filteredConstants.TYPE_OF_BUSINESS_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false,
                showContainer: true
            };
        case filteredConstants.TYPE_OF_BUSINESS_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false,
                showContainer: true
            };
        default:
            return state
    }
}
