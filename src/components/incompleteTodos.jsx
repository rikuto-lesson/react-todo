export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDeleat } = props;

  return (
    <div className="incomplete-area">
      <p className="title">未完了のＴＯＤＯ</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li>
              <div key={todo} className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDeleat(index)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
