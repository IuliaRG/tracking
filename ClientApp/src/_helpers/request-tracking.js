import { debug } from "util";
import { authHeader, config } from '../_helpers';

export function handleResponse(response) {
    return new Promise((resolve, reject) => {
        if (response.ok) {
            response.json().then(json => resolve(json)).catch((error) => {
                resolve('');
            });
        }
        else if (response.status === 401) {
            // window.location = "/login";
        }
        else {
            // return error message from response body
            response.text().then(text => reject(text));
        }
    });
}

export function mockRequest(response) {
    return new Promise((resolve) => {
        resolve(response);
    });
}

export function handleError(error) {
    return Promise.reject(error && error.message);
}

export function handleErrorLogin(error) {
    return Promise.reject('Please enter a correct username and password. Note that both fields may be case-sensitive.');
}

export function getQueryString(params) {
    var esc = encodeURIComponent;
    var query = Object.keys(params)
        .filter(function (k) { if (!params[k]) { return false; } return true; })
        .map(k => params[k] ? (esc(k) + '=' + esc(params[k])) : '')
        .join('&');
    return query;
}

export function createRequest(requestModel, url, method = 'GET', body) {
    const requestOptions = {
        method: method,
        headers: authHeader()
    };

    if (body) {
        requestOptions.body = body;
    }

    const queryString = (requestModel ? getQueryString(requestModel) : '');
    return fetch(config.apiUrl + url + queryString, requestOptions).then(handleResponse, handleError);
}

