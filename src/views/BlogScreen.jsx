import React, { useContext } from "react";
import { LanguageContextBiografia } from "../context/LanguageContextBiografia";
import TablaExcelES from "../components/TablaExcelES";
import TablaExcelEN from "../components/TablaExcelEN";
import TablaExcelFR from "../components/TablaExcelFR";
import FooterBlog from "../components/common/FooterBlog";
import NavReactES from "../components/common/NavReactES";

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
      <NavReactES />
      <div className="py-5">{renderBlog()}</div>
      <FooterBlog />
    </section>
  );
};

export default BlogScreen;
