const Board = ({ squares }) => {

  const createSquare = (array) => {
   return array.map((element) => {
      return <div key={element}> {element}</div>;
    });
  };

  return (
    <div className="board">
      <div className="row">{createSquare([1, 2, 3])}</div>
      <div className="row">{createSquare([4, 5, 6])}</div>
      <div className="row">{createSquare([7, 8, 9])}</div>
    </div>
  );
};

export default Board;
