import React from "react";
import TablaExcel from "../components/TablaExcel";

const BlogScreen = () => {
  return (
    <div className="py-5">
      <div className="container">
        <h6
          className="montserrat-regular pb-4"
          style={{ fontSize: "22px", fontWeight: "bold" }}
        >
          Novedades
        </h6>
      </div>
      <TablaExcel />
    </div>
  );
};

export default BlogScreen;
