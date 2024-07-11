import React, { useEffect } from "react";

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;

    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: "https://calendly.com/marialujanarias-osteopatia",
          text: "Solicitar consulta",
          color: "#FE2D30",
          textColor: "#ffffff",
          branding: true,
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="schedule-widget-container">
      {/* Widget will be rendered here */}
    </div>
  );
};

export default CalendlyWidget;
