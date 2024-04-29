import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as service from "../../Services/productService";
const EditProduct = () => {
  let { id } = useParams();
  const [product, setProduct] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    getFindById();
  }, [id]);

  const getFindById = async () => {
    try {
      const response = await service.findByIdProduct(id);
      console.log(id);
      console.log("2222", response.data.product);
      const temp = response.data;
        setProduct(temp);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (values) => {
    try {
      await service.updateProduct(id, values);
      navigate("/listProduct");
    } catch (error) {
      console.error(error);
    }
  };

  if (!product) {
    return null;
  }
  const initProduct = {
    productName: product.productName,
    status: product.status,
    productNumber: product.productNumber,
    category: product.category,
    price: product.price,
    imgURL: product.imgURL,
    describe: product.describe,
    expirationDate: product.expirationDate,
    dateOfManufacture: product.dateOfManufacture,
  };
  return (
    <Formik initialValues={initProduct} onSubmit={handleSubmit}>
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
                <option value={"6628aa1b1223ea212541f3cb"}>Rau</option>
                <option value={"6628aa3c1223ea212541f3cd"}>Củ</option>
                <option value={"6628aa591223ea212541f3cf"}>Quả</option>
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

export default EditProduct;
