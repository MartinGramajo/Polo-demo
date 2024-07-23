import React from "react";
import TablaExcelEN from "../components/TablaExcelEN";
import NavReactEN from "../components/common/NavReactEN";
import FooterEN from "../components/common/FooterEN";

const BlogScreenEN = () => {
  return (
    <section className="d-flex flex-column min-vh-100 ">
      <NavReactEN />
      <div className="py-5 padding-lr-responsive">
        <TablaExcelEN />;
      </div>
      <div className="mt-auto">
        <FooterEN />
      </div>
    </section>
  );
};

export default BlogScreenEN;
