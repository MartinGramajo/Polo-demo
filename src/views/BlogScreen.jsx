import React, { useContext } from "react";
import NavReactBlog from "../components/common/NavReactBlog";
import { LanguageContextBiografia } from "../context/LanguageContextBiografia";
import TablaExcelES from "../components/TablaExcelES";
import TablaExcelEN from "../components/TablaExcelEN";
import TablaExcelFR from "../components/TablaExcelFR";
import FooterBlog from "../components/common/FooterBlog";

const BlogScreen = () => {
  const { language, setLanguage } = useContext(LanguageContextBiografia);

  const renderBlog = () => {
    if (language === "es") {
      return <TablaExcelES />;
    } else if (language === "en") {
      return <TablaExcelEN />;
    } else {
      return <TablaExcelFR />;
    }
  };

  return (
    <section className="d-flex flex-column min-vh-100 ">
      <NavReactBlog />
      <div className="py-5">{renderBlog()}</div>
      <FooterBlog />
    </section>
  );
};

export default BlogScreen;
