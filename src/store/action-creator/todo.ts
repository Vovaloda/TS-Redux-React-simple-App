import axios from "axios";
import { Dispatch } from "react";
import { TodoAction, TodoActionsTypes } from "../../types/todo";

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try{
            dispatch({type: TodoActionsTypes.FETCH_TODOS});
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            });
            setTimeout(()=>{
                dispatch({type: TodoActionsTypes.FETCH_TODOS_SUCCES, payload: response.data
            });}, 500);
        }catch(e){
            dispatch({type: TodoActionsTypes.FETCH_TODOS_ERROR, payload: "Произошла ошибка при загрузке дел"});
        }
    }
}

export function setTodoPage(page: number): TodoAction{
    return {type: TodoActionsTypes.SET_TODO_PAGE, payload: page};
}