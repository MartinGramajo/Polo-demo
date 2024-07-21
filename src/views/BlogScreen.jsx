import React, { useContext } from "react";
import NavReactBlog from "../components/common/NavReactBlog";
import { LanguageContextBiografia } from "../context/LanguageContextBiografia";
import TablaExcelES from "../components/TablaExcelES";
import TablaExcelEN from "../components/TablaExcelEN";
import TablaExcelFR from "../components/TablaExcelFR";

const BlogScreen = () => {
  const { language, setLanguage } = useContext(LanguageContextBiografia);
  console.log("BlogScreen ~ language:", language);

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
    <section>
      <NavReactBlog />
      <div className="py-5">{renderBlog()}</div>
    </section>
  );
};

export default BlogScreen;
