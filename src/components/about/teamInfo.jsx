import React from "react";
import ReadMoreReact from 'read-more-react';

// SCSS
import "./teamInfo.scss";

const about = () => (
  <div className="team__info flex-center">
    <div>
      <h4 className="font20 weight800">Little About Me</h4>
      <p className="font12 weight500">
        <div>

          <ReadMoreReact text="Advocate Shabnam Bano has been practicing and handling cases independently with a result oriented approach, both professionally and ethically and has now acquired over 6 years of 
          professional experience in providing legal consultancy and advisory services. Advocate Shabnam Bano's office is in lucknow Cantt, Telibagh and Gomti Nagar, Lucknow."
            min={50}
            embedCSS="false"
            readMoreText="read more..." />

        </div>
      </p>
      {/* <p className="font12 weight500">Read More</p> */}
    </div>
  </div>
);

export default about;
