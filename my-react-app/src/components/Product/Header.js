import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const [activeTab, setActiveTab] = useState("tableProduct");
  const location = useLocation();
  useEffect(() => {
    if(location.pathname==="/listProduct"){
        setActiveTab("tableProduct");
    } else if(location.pathname==="/addProduct"){
        setActiveTab("addProduct");
    }
  },[location]);
  return (
    <div className="header">
      <p className="logo">Contact App</p>
      <div className="header-right">
        <Link to="/listProduct">
          <p
            className={`${activeTab === "tableProduct" ? "active" : ""}`}
            onClick={() => setActiveTab("tableProduct")}
          >
            list Product
          </p>
        </Link>
        <Link to="/addProduct">
          <p
            className={`${activeTab === "addProduct" ? "active" : ""}`}
            onClick={() => setActiveTab("addProduct")}
          >
            Add Product
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
