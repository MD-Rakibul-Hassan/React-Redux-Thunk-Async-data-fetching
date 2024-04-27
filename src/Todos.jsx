import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import asyncAction from './servises/actions/action';
import Todo from './Todo';

const Todos = () => {
    const { isLoading, todos, error } = useSelector(state => state);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(asyncAction());
    }, [])
  return (
    <div>
        <h1>Todos App</h1>
        {
            todos.map(todo => <Todo key={todo.id} todo={todo} />)
        }
    </div>
  )
}

export default Todos;
