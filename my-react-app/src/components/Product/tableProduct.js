import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as service from "../../Services/productService";
import "./tableProduct.css";
const TableProduct = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getAll();
  }, []);
  const getAll = async () => {
    try {
      let mounted = true;
       const items = await service.getAllProduct();
      console.log("1", items);
      await setProduct(items.data.product);
      return () => {
        mounted = false;
      };
    } catch (error) {
      console.error(error);
    }
  };
  const onDelete = async (id) => {
    await service.deleteProduct(id);
    //console.log("2", id.data);
    await getAll();
  };
  const handleDelete = (id) => {
    onDelete(id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Product Name</th>
            <th style={{ textAlign: "center" }}>Status</th>
            <th style={{ textAlign: "center" }}>Product Number</th>
            <th style={{ textAlign: "center" }}>Category</th>
            <th style={{ textAlign: "center" }}>Price</th>
            <th style={{ textAlign: "center" }}>Image</th>
            <th style={{ textAlign: "center" }}>Describe</th>
            <th style={{ textAlign: "center" }}>Expiration Date</th>
            <th style={{ textAlign: "center" }}>Date Of Manufacture</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((product, index) => (
            <tr key={product._id}>
              <th scope="row">{index + 1}</th>
              <td>{product.productName}</td>
              <td>{product.status}</td>
              <td>{product.productNumber}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.imgURL}</td>
              <td>{product.describe}</td>
              <td>{product.expirationDate}</td>
              <td>{product.dateOfManufacture}</td>
              <td style={{ display: "flex", flexDirection: "row" }}>
                <Link to={`/editProduct/${product._id}`}>
                  <button className="btn-edit">Edit Product</button>
                </Link>
                <button className="btn-delete" onClick={()=>handleDelete(product._id)}>Delete Product</button>
                <Link to={`/viewProduct/${product._id}`}>
                  <button className="btn-view" >View Product</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableProduct;
