/* eslint-disable no-unused-vars -- Remove me */
import React, { useEffect, useState } from 'react';
import PageTitle from './PageTitle';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const url = (path) => `${process.env.REACT_APP_BASE_URL}${path}`;

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();



  useEffect(() => {
      async function getUser() {
        try {
          const response = await fetch(url('/api/todos'));
          if (!response.ok) {
            throw new Error(`Network reponse was not OK! Error status:${response.status}`);
          }
          const jsonData = await response.json();
          setTodos(jsonData);
        } catch (err) {
          setError(err);
        } finally {
          setIsLoading(false);
        }
      }
      getUser();
    /* Use fetch to send a GET request to `/api/todos`.
     * Once the response JSON is received and parsed,
     * update state with the received todos.
     * Handle errors correctly and set `error` to any error or error status code.
     * Set `isLoading` to false when all network activity is finished.
     */
  }, []);

  async function addTodo(newTodo) {
    try{
      const response = await fetch(url('/api/todos'), {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newTodo)
      });
      if (!response.ok) {
        throw new Error(`Network response was not OK! Error status:${response.status}`);
      }
      const jsonData = await response.json();
      setTodos(todos.concat(jsonData));
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }

    /* Use fetch to send a POST request to `/api/todos`.
     * Once the response JSON is received and parsed,
     *   - set the Todos to a new array with the added Todo concatenated
     *   - handle errors appropriate (as mentioned above)
     *
     * DO NOT MUTATE the original state array, nor any objects within it.
     *
     * TIP: When calling fetch, be sure to SERIALIZE the todo object in the body
     * with JSON.stringify() and specify the "Content-Type" header as "application/json"
     * TIP: The "(prev) =>" version of the state setter function might be convenient
     * TIP: Use Array.prototype.concat to create a new array containing the contents
     * of the old array, plus the object returned by the server.
     */
  }

  async function toggleCompleted(todoId) {
    try{
      let targetIndex;
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].todoId === todoId) { //suggestion: try todos.find //
          targetIndex = i;
        }
      }
      const complete = { isCompleted: !todos[targetIndex].isCompleted };

      const response = await fetch(url(`/api/todos/${todoId}`), {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(complete)
      });
      if (!response.ok) {
        throw new Error(`Network response was not OK! Error status:${response.status}`);
      }
      const jsonData = await response.json()
      const updateData = todos.map(todo => todo.todoId === todoId ? jsonData : todo);
      setTodos(updateData);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
    /* Find the index of the todo with the matching todoId in the state array.
     * Get its "isCompleted" status.
     * Make a new object containing ONE PROPERTY: the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Once the response JSON is received and parsed,
     *   - create a shallow copy of the todos array from state
     *   - replace the old todo with the todo received from the server
     *   - handle errors appropriate (as mentioned above)
     *
     * NOTE: "toggle" means to flip back and forth, so clicking a todo
     * in the list repeatedly should "toggle" its isCompleted status back and forth.
     *
     * DO NOT try to calculate the index of the todo by subtracting 1 from the id.
     *
     * DO NOT MUTATE the original state array, nor any objects within it.
     *
     * TIP: `Array.map` is a convenient way to make a copy of an array -- compare
     * the Todo IDs and map the existing Todo if it is not the one that was
     * just updated, and map the updated array if it is.
     * TIP: When calling fetch, be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return <div>Error! {error.message}</div>;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col pt-5">
          <PageTitle text="Todo App" />
          <TodoForm onSubmit={addTodo} />
          <TodoList todos={todos} toggleCompleted={toggleCompleted} />
        </div>
      </div>
    </div>
  );
}
