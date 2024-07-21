import React from "react";
import TablaExcelFR from "../components/TablaExcelFR";
import NavReactFR from "../components/common/NavReactFR";
import FooterFR from "../components/common/FooterFR";

const BlogScreenFR = () => {
  return (
    <section className="d-flex flex-column min-vh-100 ">
      <NavReactFR />
      <div className="py-5">
        <TablaExcelFR />;
      </div>
      <FooterFR />
    </section>
  );
};

export default BlogScreenFR;
