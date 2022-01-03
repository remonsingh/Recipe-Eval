import { Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { RecipieCards } from "./Recipiecards";
import { RecipieDetails } from "./Recipiedetails";
import "./Recipie.css";
export const Recipie = () => {
  const [dish, setDish] = useState({});
  const [fullData, setFullData] = useState();

  const handleFullData = (d) => {
    console.log("full", d);
    setFullData(d);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setDish({
      ...dish,
      [name]: value,
    });
    console.log("name", name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("dish", dish);
    postData();
  };
  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = useState([]);
  const getData = () => {
    fetch("http://localhost:3001/dish")
      .then((res) => res.json())
      .then((data) => {
        console.log("GET", data);
        setData(data);
      });
  };

  const postData = () => {
    fetch("http://localhost:3001/dish", {
      method: "POST",
      body: JSON.stringify(dish),
      headers: {
        "content-type": "application/json",
      },
    });
  };

  return (
    <>
      <h1>
        <i> welcome To Recipie App</i>
      </h1>
      <div className="grid">
        <form onSubmit={handleSubmit}>
          <TextField
            id="demo-helper-text-misaligned-no-helper"
            label="Title"
            name="title"
            onChange={handleChange}
          />
          <br />
          <TextField
            id="demo-helper-text-misaligned-no-helper"
            label="Ingredients"
            name="ingredients"
            onChange={handleChange}
          />
          <br />
          <TextField
            id="demo-helper-text-misaligned-no-helper"
            label="Time to cook"
            name="time"
            onChange={handleChange}
          />
          <br />
          <TextField
            id="demo-helper-text-misaligned-no-helper"
            label="Instructions"
            name="inst"
            onChange={handleChange}
          />
          <br />
          <div>
            <Button
              variant="outlined"
              onClick={() => {
                fetch("https://foodish-api.herokuapp.com/api")
                  .then((res) => res.json())
                  .then(({ image }) => {
                    //   console.log("img", image);
                    setDish({
                      ...dish,
                      img: image,
                    });
                  });
              }}
            >
              Add Image
            </Button>
            <img className="image" src={dish.img} alt="" />
          </div>
          <input type="submit" value="Add Recipie" />
        </form>
        <RecipieCards data={data} handleFullData={handleFullData} />
      </div>
      <RecipieDetails {...fullData} />
    </>
  );
};