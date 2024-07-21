import React from "react";
import NavReactBlog from "../components/common/NavReactBlog";

import TablaExcelEN from "../components/TablaExcelEN";

import FooterBlog from "../components/common/FooterBlog";

const BlogScreenEN = () => {
  return (
    <section className="d-flex flex-column min-vh-100 ">
      <NavReactBlog />
      <div className="py-5">
        <TablaExcelEN />;
      </div>
      <FooterBlog />
    </section>
  );
};

export default BlogScreenEN;
