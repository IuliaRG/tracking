import { filteredConstants, productCategoriesConstants } from '../_constants';

export function trackingTransport(state = {}, action) {
    switch (action.type) {
        case filteredConstants.TYPE_OF_TRACHING_REQUEST:
        
            return {
                ...state,
                loading: true,
                showContainer: false
            };
        case filteredConstants.TYPE_OF_TRACHING_SUCCESS:
        
            return {
                ...state,
                data: action.data,
                loading: false,
                showContainer: true
            };
        case filteredConstants.TYPE_OF_TRACHING_FAILURE:
        
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



