import { put, takeEvery } from 'redux-saga/effects'
import {
    addLocationError,
    addLocationSuccess
} from './location.actions'

import {
    ADD_LOCATION_START
} from './location.constants'


function* addLocationStart({type, payload}) {
    try {
        console.log(payload, "selected")
        yield put(addLocationSuccess(payload))
    } catch (err) {
        yield put(addLocationError(err))
    }
}

function* locationSaga() {
    yield takeEvery(ADD_LOCATION_START, addLocationStart)
}

export default locationSaga