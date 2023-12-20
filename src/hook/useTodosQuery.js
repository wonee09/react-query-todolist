import { addTodo, removeTodo, switchTodo } from "../api/todos";
import { useMutation } from "react-query";

export const useAddMutation = () => useMutation(addTodo);
export const useRemoveMutation = () => useMutation(removeTodo);
export const useSwitchMutation = () => useMutation(switchTodo);
