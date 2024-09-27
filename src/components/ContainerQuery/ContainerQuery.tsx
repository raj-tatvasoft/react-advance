import "./ContainerQuery.css";
const ContainerQuery = () => {
  //inline-size => work for width
  //size =>  work for both height and width
  //normal => default nothing happen
  return (
    <>
      <div className="ContainerQueryWrapper">
        Container Query
        <div className="child1"></div>
      </div>
    </>
  );
};

export default ContainerQuery;
