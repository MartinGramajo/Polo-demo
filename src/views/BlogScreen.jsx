import React, { useContext } from "react";
import { LanguageContextBiografia } from "../context/LanguageContextBiografia";
import TablaExcelES from "../components/TablaExcelES";
import TablaExcelEN from "../components/TablaExcelEN";
import TablaExcelFR from "../components/TablaExcelFR";
import NavReactES from "../components/common/NavReactES";
import Footer from "../components/common/Footer";

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
      <div className="py-5 padding-lr-responsive">{renderBlog()}</div>
      <Footer />
    </section>
  );
};

export default BlogScreen;
