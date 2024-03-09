const Todoitem2 = () => {
    let todoItem = 'Go to college'
    let todoDate = '4/10/2023'
  return (
    <div className="container">
    <div class="row kg-row">
      <div class="col-sm-5">{todoItem}</div>
      <div class="col-sm-4">{todoDate}</div>
      <div class="col-sm-2">
        <button type="button" class="btn btn-danger kg-button">
          Delete
        </button>
      </div>
    </div>
    </div>
  );
};
export default Todoitem2;
