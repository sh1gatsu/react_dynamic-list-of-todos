import { TodosStatus } from '../../types/TodosStatus';

type Props = {
  filterByStatus: (option: TodosStatus) => void
  filterByQuery: (query: string) => void
  query: string
};

export const TodoFilter: React.FC<Props> = ({
  filterByStatus,
  filterByQuery,
  query,
}) => {
  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            onChange={
              (event) => filterByStatus(event.target.value as TodosStatus)
            }
          >
            <option value={TodosStatus.ALL}>
              All
            </option>

            <option value={TodosStatus.ACTIVE}>
              Active
            </option>

            <option value={TodosStatus.COMPLETED}>
              Completed
            </option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={query}
          onChange={(event => filterByQuery(event.target.value))}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        {query.trim() !== '' && (
          <span className="icon is-right" style={{ pointerEvents: 'all' }}>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={() => filterByQuery('')}
            />
          </span>
        )}
      </p>
    </form>
  );
};