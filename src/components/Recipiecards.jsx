export const RecipieCards = ({ data, handleFullData }) => {
  console.log("cards", data);
  return (
    <>
      <div className="cards">
        {data.map((e) => {
          return (
            <div
              className="cards"
              onClick={() => {
                console.log("card clicked", e);
                handleFullData(e);
              }}
            >
              <i>
                {" "}
                <b> Dish </b> {e.title} <b>Cooking Time</b> {e.time}{" "}
              </i>
            </div>
          );
        })}
      </div>
    </>
  );
};