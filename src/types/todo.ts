export interface TodoState {
    todos: any[]; 
    loading: boolean; 
    error: null | string;
    page: number;
    limit: number;
}

export enum TodoActionsTypes {
    FETCH_TODOS = "FETCH_TODOS",
    FETCH_TODOS_SUCCES = "FETCH_TODOS_SUCCES",
    FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
    SET_TODO_PAGE = "SET_TODO_PAGE",
}

interface FetchTodoAction {
    type: TodoActionsTypes.FETCH_TODOS;
}

interface FetchTodoSuccesAction {
    type: TodoActionsTypes.FETCH_TODOS_SUCCES;
    payload: any[];
}

interface FetchTodoErrorAction {
    type: TodoActionsTypes.FETCH_TODOS_ERROR;
    payload: string;
}

interface SetTodoPageAction {
    type: TodoActionsTypes.SET_TODO_PAGE;
    payload: number;
}

export type TodoAction = FetchTodoAction | FetchTodoSuccesAction | FetchTodoErrorAction | SetTodoPageAction;