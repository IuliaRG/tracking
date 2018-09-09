import { authHeader, config, handleResponse, handleError, getQueryString, createRequest, getTextResponse, mockRequest } from '../_helpers';

export const filteredMockedService = {
    getGridProducts,
    getTypeOfBusiness,
};
function getGridProducts() {
    return mockRequest([
        {
            id: 1,
            name: "Product 1"
        },
        {
            id: 2,
            name: "Product 2"
        },
        {
            id: 3,
            name: "Product 3"
        }
        ]);
}

function getTypeOfBusiness() {
    return mockRequest([
        {
            id: 1,
            name: "Type Of Business 1"
        },
        {
            id: 2,
            name: "Type Of Business  2"
        },
        {
            id: 3,
            name: "Type Of Business  3"
        }
        ]);
}

