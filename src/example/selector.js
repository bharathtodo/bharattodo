//Selector
import  {createSelector} from 'reselect'

export const selectTODO = (state)  => state.example.todo  
export const selectDummyText = (state) => state.example.dummyText


export const selectHybrid  = createSelector(
    selectTODO,
    selectDummyText,
    (todo,dummyText) =>{
        if(todo)
        return `${todo.title} ++  ${dummyText}`
        return ""
    }
)