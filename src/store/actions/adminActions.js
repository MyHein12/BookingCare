import actionTypes from './actionTypes';
import { getAllCodeService } from '../../services/userService'

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_GENDER_START
            })
            let res = await getAllCodeService('GENDER');
            (res && res.errCode === 0) ? dispatch(fetchGenderSuccess(res.data)) : dispatch(fetchGenderFailed());
        } catch (e) {
            dispatch(fetchGenderFailed());
            console.log("fetchGenderStart error: ", e)
        }
    }

}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})

export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_POSITION_START
            })
            let res = await getAllCodeService('POSITION');
            (res && res.errCode === 0) ? dispatch(fetchPositionSuccess(res.data)) : dispatch(fetchPositionFailed());
        } catch (e) {
            dispatch(fetchPositionFailed());
            console.log("fetchPositionStart error: ", e)
        }
    }

}

export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_ROLE_START
            })
            let res = await getAllCodeService('ROLE');
            (res && res.errCode === 0) ? dispatch(fetchRoleSuccess(res.data)) : dispatch(fetchRoleFailed());
        } catch (e) {
            dispatch(fetchRoleFailed());
            console.log("fetchRoleStart error: ", e)
        }
    }

}

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})