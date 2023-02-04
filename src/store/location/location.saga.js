import { call, put, takeEvery } from 'redux-saga/effects'
import LocationService from './location.service'
import {
    getCurrentLocationSuccess,
    getCurrentLocationError
} from './location.actions'

import {
    GET_CURRENT_LOCATION_START
} from './location.constants'


function* getCurrentLocationStart({type, payload}) {
    try {

        const response = yield LocationService.getCurrentLocation(payload)
        yield put(getCurrentLocationSuccess(response.data))
        console.log(response)
    } catch (err) {
        yield put(getCurrentLocationError(err))
    }
}

function* locationSaga() {
    yield takeEvery(GET_CURRENT_LOCATION_START, getCurrentLocationStart)
}

export default locationSaga