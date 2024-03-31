const Container = (props) => {
  return (
    <>
      <div className="card" style={{ width: "75%" }}>
        {props.children}
      </div>
    </>
  );
};

export default Container;
