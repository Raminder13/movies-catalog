import React from "react";
import { useForm } from "react-hook-form";

import "../styles/New.css";

function AddMovieForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.title); // Access the "title" property from the form data
  };

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Title:</label>
        <input type="text" {...register("title", { required: true })} />
        {errors.title && <span>Title is required.</span>}
      </div>

      <div>
        <label>Running time:</label>
        <input type="text" {...register("runningTime", { required: true })} />
        {errors.runningTime && <span>Running time is required.</span>}
      </div>

      <div>
        <label>Release Year:</label>
        <input
          type="number"
          {...register("year", { required: true, min: 1900 })}
        />
        {errors.year && <span>Invalid year.</span>}
      </div>

      <div>
        <label>Description:</label>
        <textarea {...register("description", { required: true })} />
        {errors.description && <span>Description is required.</span>}
      </div>

      <div>
        <label>Image:</label>
        <input type="file" {...register("poster", { required: true })} />
        {errors.poster && <span>Image is required.</span>}
      </div>

      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovieForm;
