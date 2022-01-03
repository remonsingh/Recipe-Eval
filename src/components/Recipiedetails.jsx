export const RecipieDetails = ({ title, time, ingredients, img, inst }) => {
    console.log("details", title);
    return (
      <>
        <div className="details ">
          <div>
            <img className="img" src={img} alt="" />
          </div>
          <div>
            <p>
              <b>Dish Name </b>
              {title}
            </p>
            <p>
              <b>Ingredients</b>
              {ingredients}
            </p>
            <p>
              <b>Cooking Time</b>
              {time}
            </p>
            <p>
              <b>Instruction</b>
              {inst}
            </p>
          </div>
        </div>
      </>
    );
  };