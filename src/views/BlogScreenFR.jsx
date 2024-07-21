import React from "react";
import NavReactBlog from "../components/common/NavReactBlog";
import FooterBlog from "../components/common/FooterBlog";
import TablaExcelFR from "../components/TablaExcelFR";

const BlogScreenFR = () => {
  return (
    <section className="d-flex flex-column min-vh-100 ">
      <NavReactBlog />
      <div className="py-5">
        <TablaExcelFR />;
      </div>
      <FooterBlog />
    </section>
  );
};

export default BlogScreenFR;
