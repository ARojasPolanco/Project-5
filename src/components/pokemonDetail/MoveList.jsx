const MoveList = ({ move }) => {
    console.log(move)
  return <div className="bg-medium-gray rounded-full p-2 uppercase">{move.name}</div>;
};
export default MoveList;
