import React, { useEffect } from "react";

const CalendlyWidgetEN = () => {
  useEffect(() => {
    const loadCalendlyWidget = () => {
      const head = document.querySelector("head");
      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      head.appendChild(link);

      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;

      script.onload = () => {
        if (window.Calendly) {
          window.Calendly.initBadgeWidget({
            url: "https://calendly.com/marialujanarias-osteopatia",
            text: "Request Consultation",
            color: "#FE2D30",
            textColor: "#ffffff",
            branding: true,
          });
        }
      };

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
        head.removeChild(link);
      };
    };

    loadCalendlyWidget();
  }, []);

  return (
    <div id="schedule-widget-container">
      {/* Widget will be rendered here */}
    </div>
  );
};

export default CalendlyWidgetEN;
