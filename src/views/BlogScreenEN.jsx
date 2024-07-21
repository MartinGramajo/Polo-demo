import React from "react";
import TablaExcelEN from "../components/TablaExcelEN";
import NavReactEN from "../components/common/NavReactEN";

const BlogScreenEN = () => {
  return (
    <section className="d-flex flex-column min-vh-100 ">
      <NavReactEN />
      <div className="py-5">
        <TablaExcelEN />;
      </div>
    </section>
  );
};

export default BlogScreenEN;
