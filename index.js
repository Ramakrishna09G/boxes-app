const Box = (props) => {
  //  Write your code here.
  return <div className={props.className}>{props.children}</div>;
};

const element = (
  //  Write your code here.
  <>
    <div className="boxes-page-bg-container">
      <div className="boxes-card-bg-container">
        <h1 className="main-heading">Boxes</h1>
        <div className="boxes-card-container">
          <Box className="box box-small" children="Small" />
          <Box className="box box-medium" children="medium" />
          <Box className="box box-large" children="Large" />
        </div>
      </div>
    </div>
  </>
);

ReactDOM.render(element, document.getElementById("root"));
