import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const ShaadiFooter = () => {

return(
    <>
        <footer className="w-100 bg-light text-center p-5">
            <p> &#x00A9; 2020 Shaadi.com . All Rights Reserved | Terms and Condition Apply </p>
            <div className="social_media d-flex justify-content-center">          
          <FacebookIcon className="icon_f" />
          <LinkedInIcon className="icon_l" />
          <InstagramIcon className="icon_i" />
          <TwitterIcon className="icon_t" />
          <YouTubeIcon className="icon_y" />
          </div>
        </footer>
    </>
);
};
export default ShaadiFooter;