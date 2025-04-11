import React, { useReducer, useState } from "react";
import "./Add.scss";
import { gigReducer, INITIAL_STATE } from "../../reducers/gigReducers";
import upload from "../../utils/upload";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleFeature = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_FEATURE",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
      const cover = await upload(singleFile);

      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      setUploading(false);
      dispatch({ type: "ADD_IMAGES", payload: { cover, images } });
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (gig) => {
      return newRequest.post("/gigs", gig);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
      navigate("/mygigs"); 
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
  };

  return (
    <div className="add">
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="e.g. I will do something I'm really good at"
              onChange={handleChange}
              required
            />
            <label htmlFor="cat">Category</label>
            <select
              id="cat"
              name="cat"
              onChange={handleChange}
              required
            >
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <div className="images">
              <div className="imagesInputs">
                <label htmlFor="cover">Cover Image</label>
                <input
                  type="file"
                  id="cover"
                  onChange={(e) => setSingleFile(e.target.files[0])}
                  required
                />
                <label htmlFor="uploadImages">Upload Images</label>
                <input
                  type="file"
                  id="uploadImages"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                />
              </div>
              <button onClick={handleUpload}>
                {uploading ? "Uploading" : "Upload"}
              </button>
            </div>
            <label htmlFor="desc">Description</label>
            <textarea
              id="desc"
              name="desc"
              placeholder="Brief descriptions to introduce your service to customers"
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="details">
            <label htmlFor="shortTitle">Service Title</label>
            <input
              type="text"
              id="shortTitle"
              name="shortTitle"
              placeholder="e.g. One-page web design"
              onChange={handleChange}
              required
            />
            <label htmlFor="shortDesc">Short Description</label>
            <textarea
              id="shortDesc"
              name="shortDesc"
              placeholder="Short description of your service"
              onChange={handleChange}
              required
            ></textarea>
            <label htmlFor="deliveryTime">Delivery Time (e.g. 3 days)</label>
            <input
              type="number"
              id="deliveryTime"
              name="deliveryTime"
              onChange={handleChange}
              required
            />
            <label htmlFor="revisionNumber">Revision Number</label>
            <input
              type="number"
              id="revisionNumber"
              name="revisionNumber"
              onChange={handleChange}
              required
            />
            <label htmlFor="features">Add Features</label>
            <form action="" className="add" onSubmit={handleFeature}>
              <input type="text" placeholder="e.g. page design" />
              <button type="submit">Add</button>
            </form>
            <div className="addedFeatures">
              {state?.features?.map((f, index) => (
                <div className="item" key={index}>
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVE_FEATURE", payload: f })
                    }
                  >
                    {f}
                    <span>X</span>
                  </button>
                </div>
              ))}
            </div>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              onChange={handleChange}
              required
            />
            <button type="submit" onClick={handleSubmit}>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
