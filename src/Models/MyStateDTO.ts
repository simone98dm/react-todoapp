import { TodoDTO } from "./TodoDTO";

export interface MyState {
    list: TodoDTO[];
    theme: string;
}