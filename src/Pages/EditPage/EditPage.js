import React from "react";
import { useNavigate } from "react-router-dom";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import data from "../../Data/data";

import Header from "../../Components/Header";
import "../../Sass/AddPage.scss";

function EditPage(data) {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data1) => {
    data.push(data1);
    navigate("../");
    reset();
  };

  return (
    <div className="container">
      <Header />
      <p className="py-3 textMain">
        Barchasini ko’rish / qo’shish / o’zgartirish / o’chirish paneli
      </p>
      <h1 className="titlePage">Qoshishi</h1>

      <form className="w-100 py-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <div>
              <TextField
                id="outlined-basic"
                variant="outlined"
                label="Mahsulot rasmi"
                placeholder="Mahsulot rasmi"
                className="w-100 mb-3"
                name="imgUrl"
                defaultValue={data.imgUrl}
                {...register("imgUrl", { required: true })}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <TextField
                id="outlined-basic"
                label="Mahsulot nomi"
                placeholder="Mahsulot nomi"
                variant="outlined"
                className="w-100 mb-3"
                name="title"
                defaultValue={data.title}
                {...register("title", { required: true })}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <TextField
                id="outlined-basic"
                label="Mahsulot narxi"
                placeholder="Mahsulot rasmi"
                variant="outlined"
                className="w-100 mb-3"
                name="price"
                defaultValue={data.price}
                {...register("price", { required: true })}
              />
            </div>
          </div>
        </div>
        <div className="buttons py-5">
          <Link to="/">
            <Button
              variant="contained"
              className={"me-3 mb-3 myBtn"}
              onClick={() => navigate("../")}
              sx={{
                backgroundColor: "#282A30",
                "&:hover": { backgroundColor: "#282A30" },
              }}
            >
              Ortqa qaytish
            </Button>
          </Link>
          <Button
            type="submit"
            variant="contained"
            className={"me-3 myBtn mb-3"}
            sx={{
              backgroundColor: "#282A30",
              "&:hover": { backgroundColor: "#282A30" },
            }}
          >
            Saqlash
          </Button>
        </div>
      </form>
    </div>
  );
}

export default EditPage;
