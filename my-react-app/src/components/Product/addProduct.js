import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as service from "../../Services/productService";
import * as Yup from "yup";
import "./AddEdit.css";
import { toast } from "react-toastify";
const initialState = {
  productName: "",
  status: Boolean,
  productNumber: 0,
  category: "",
  price: 0,
  imgURL: "",
  describe: "",
  expirationDate: "",
  dateOfManufacture: "",
};
const AddProduct = () => {
  //const [state, setState] = useState(initialState);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    //values.preventDefault();
    try {
      await service.doProduct(values);
      //console.log(values.data);
      toast.success("Product added successfully");
      navigate("/listProduct");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError("Has exist");
      } else {
        console.error(error);
        toast.error("Product added not successfully");
      }
    }
  };
  const [getCategory, setCategory] = useState("");
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <Formik 
    initialValues={initialState}
    onSubmit={handleSubmit}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "15px",
            maxWidth: "1200px",
          }}
         
        >
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ flex: "1" }}>
              <label htmlFor="productName "> Product Name</label>
              <Field
                type="text"
                name="productName"
                // required
                // minlength="3"
                // maxlength="100"
              />

              <label htmlFor="status">Product status:</label>
              <br />
              <br />
              <label>
                <Field
                  type="radio"
                  name="status"
                  value="true"
                  //required="vui lòng chọn tình trạng sản phẩm"
                />
                Còn hàng
              </label>
              <label>
                <Field
                  type="radio"
                  name="status"
                  value="false"
                  //required="vui lòng chọn tình trạng sản phẩm"
                />
                Hết hàng
              </label>
              <br />
              <br />
              <label htmlFor="productNumber">Product number:</label>
              <Field
                type="number"
                id="productNumber"
                name="productNumber"
                // required
                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                // min="0"
                // max="10000000"
              />
            </div>
            <div style={{ flex: "1" }}>
              <label htmlFor="category">Category:</label>
              <Field
                component="select"
                id="category"
                name="category"
                //required="vui lòng chọn loại sản phẩm"
              >
                <option value="">Chọn danh mục</option>
                <option value={'6628aa1b1223ea212541f3cb'}>Rau</option>
                <option value={'6628aa3c1223ea212541f3cd'}>Củ</option>
                <option value={'6628aa591223ea212541f3cf'}>Quả</option>
              </Field>
              <br />
              <label htmlFor="price">Product price:</label>
              <div>
                <Field
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Your product price"
                  // required
                  // min="0"
                  // max="10000000"
                />
              </div>
              <br />
              <label htmlFor="imgURL">Product image:</label>
              <Field
                type="file"
                id="imgURL"
                name="imgURL"
                placeholder="Your product imgURL"
                // required="vui lòng chọn ảnh sản phẩm"
                // pattern="vui lòng chọn ảnh sản phẩm"
              />
            </div>
            <div style={{ flex: "1" }}>
              <label htmlFor="describe"> Product describe</label>
              <Field
                type="text"
                id="describe"
                name="describe"
                placeholder="Your product describe"
                // required
                // minlength="3"
                // maxlength="500"
              />

<label htmlFor="describe">Product expiration date</label>
<Field
  type="datetime-local"
  id="expirationDate"
  name="expirationDate"
  placeholder="Your product expiration date"
/>

<label htmlFor="describe">Product date of manufacture</label>
<Field
  type="datetime-local"
  id="dateOfManufacture"
  name="dateOfManufacture"
  placeholder="Your product date of manufacture"
/>
            </div>
          </div>
          <div style={{ gridColumn: "1 / -1", textAlign: "center" }}>
            <input type="submit" value="save" />
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default AddProduct;
