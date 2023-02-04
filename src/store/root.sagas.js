import { all } from 'redux-saga/effects'
import locationSaga from './location/location.saga'

export default function* rootSaga() {
    yield all([
        locationSaga()
    ])
}