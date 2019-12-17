import * as actionTypes from './actionTypes'

export const requestTODO = (todoNum) => {
    return {
        type:actionTypes.REQUEST_TODO,
        payload:{
            todoNum
        }
    }
}

export const requestTODOSuccess = (res) => {
    return {
        type:actionTypes.REQUEST_TODO_SUCCESS,
        payload:{
            todo:res.data
        }
    }
}

export const requestTODOFailure = (error) => {
    return {
        type:actionTypes.REQUEST_TODO_FAILUR,
        payload:{
            error
        }
    }
}
