
const NoFoodItems = ({foodItems}) => {
    let emptyMessage = foodItems.length==0?<h4>Please add the items..</h4>:null;// conditions concept
  return (
    <>
      {emptyMessage}
        {foodItems.length==0&&<p>Click below '+' button to add</p>}
    </>
  )
}

export default NoFoodItems
