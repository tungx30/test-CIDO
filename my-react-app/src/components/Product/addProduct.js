import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as service from "../../Services/productService";
import * as Yup from "yup";
import "./AddEdit.css";
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
  const [state, setState] = useState(initialState);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      await service.doProduct(values);
      navigate("/listProduct");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError("Has exist");
      } else {
        console.error(error);
      }
    }
  };
  const handleInputChange = async () => {};
  const {
    productName,
    status,
    productNumber,
    category,
    price,
    imgURL,
    describe,
    expirationDate,
    dateOfManufacture,
  } = state;
  const [getCategory, setCategory] = useState("");
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <div>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="productName"> Product Name</label>
        <input
          type="text"
          id="productName"
          name="productName"
          placeholder="Your product name"
          value={productName}
          required
          minlength="3"
          maxlength="100"
          component="div"
          className="error"
          style={{ color: "red" }}
          onChange={handleInputChange}
        />

        <label htmlFor="status">Product status:</label>

        <label>
          <input
            type="radio"
            id="available"
            name="status"
            value={status}
            checked={status === "available"}
            onChange={handleInputChange}
          />
          Còn hàng
        </label>
        <label>
          <input
            type="radio"
            id="outOfStock"
            name="status"
            value={status}
            checked={status === "outOfStock"}
            onChange={handleInputChange}
          />
          Hết hàng
        </label>

        <label htmlFor="productNumber">Product number:</label>
        <input
          type="number"
          id="productNumber"
          name="productNumber"
          placeholder="Your product number"
          value={productNumber}
          required
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          min="0"
          max="10000000"
          component="div"
          className="error"
          style={{ color: "red" }}
          onChange={handleInputChange}
        />

        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="">Chọn danh mục</option>
          <option value="rau">Rau</option>
          <option value="củ">Củ</option>
          <option value="quả">Quả</option>
        </select>

        <label htmlFor="price">Product price:</label>
        <input
          type="number"
          id="price"
          name="price"
          placeholder="Your product price"
          value={price}
          required
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          min="0"
          max="10000000"
          component="div"
          className="error"
          style={{ color: "red" }}
          onChange={handleInputChange}
        />

        <label htmlFor="price">Product image:</label>
        <input
          type="file"
          id="imgURL"
          name="imgURL"
          placeholder="Your product imgURL"
          value={imgURL}
          required="vui lòng chọn ảnh sản phẩm"
          pattern="vui lòng chọn ảnh sản phẩm"
          component="div"
          className="error"
          style={{ color: "red" }}
          onChange={handleInputChange}
        />
        <label htmlFor="describe"> Product describe</label>
        <input
          type="text"
          id="describe"
          name="describe"
          placeholder="Your product describe"
          value={describe}
          required
          minlength="3"
          maxlength="500"
          component="div"
          className="error"
          style={{ color: "red" }}
          onChange={handleInputChange}
        />

        <label htmlFor="describe"> Product describe</label>
        <input
          type="text"
          id="describe"
          name="describe"
          placeholder="Your product describe"
          value={describe}
          required
          minlength="3"
          maxlength="500"
          component="div"
          className="error"
          style={{ color: "red" }}
          onChange={handleInputChange}
        />

        <label htmlFor="describe"> Product expiration date</label>
        <input
          type="date"
          id="expirationDate"
          name="expirationDate"
          placeholder="Your product expirationDate"
          value={expirationDate}
          required="vui lòng nhập ngày sản xuất"
          pattern="vui lòng nhập ngày sản xuất"
          //component="div" className="error" style={{color:'red'}}
          onChange={handleInputChange}
        />

        <label htmlFor="describe"> Product date of Manufacture</label>
        <input
          type="date"
          id="dateOfManufacture"
          name="dateOfManufacture"
          placeholder="Your product dateOfManufacture"
          value={dateOfManufacture}
          required="vui lòng nhập ngày hết hạn"
          pattern="vui lòng nhập ngày hết hạn"
          //component="div" className="error" style={{color:'red'}}
          onChange={handleInputChange}
        />
        <button type="submit">Add New</button>
      </form>
    </div>
  );
};

export default AddProduct;
