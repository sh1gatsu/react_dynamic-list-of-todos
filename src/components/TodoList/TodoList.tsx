import React from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[],
  selectedTodo: Todo | null,
  onSetOfSelectedTodo: (pickedTodo: Todo | null) => void
};

export const TodoList: React.FC<Props> = ({
  todos,
  selectedTodo,
  onSetOfSelectedTodo,
}) => (
  <table className="table is-narrow is-fullwidth">
    <thead>
      <tr>
        <th>#</th>
        <th>
          <span className="icon">
            <i className="fas fa-check" />
          </span>
        </th>
        <th>Title</th>
        <th> </th>
      </tr>
    </thead>

    <tbody>
      {todos.map(todo => (
        <tr
          data-cy="todo"
          className={classNames(
            {
              'has-background-info-light': selectedTodo?.id === todo.id,
            },
          )}
          key={todo.id}
        >
          <td className="is-vcentered">{todo.id}</td>
          <td className="is-vcentered">
            {todo.completed && (
              <span className="icon" data-cy="iconCompleted">
                <i className="fas fa-check" />
              </span>
            )}
          </td>
          <td className="is-vcentered is-expanded">
            <p className={classNames(
              {
                'has-text-success': todo.completed,
                'has-text-danger': !todo.completed,
              },
            )}
            >
              {todo.title}
            </p>
          </td>
          <td className="has-text-right is-vcentered">
            {selectedTodo?.id === todo.id
              ? (
                <button
                  data-cy="selectButton"
                  className="button"
                  type="button"
                >
                  <span className="icon">
                    <i className="far fa-eye-slash" />
                  </span>
                </button>
              )
              : (
                <button
                  data-cy="selectButton"
                  className="button"
                  type="button"
                  onClick={() => onSetOfSelectedTodo(todo)}
                >
                  <span className="icon">
                    <i className="far fa-eye" />
                  </span>
                </button>
              )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);