import React from "react";
import img from "../src/images/slide-1.png";

const Expert = () => {

return(
    <>

<div className="container">
    <div className="row text-white">
        <h1 className="text-center">What Our Expert Say</h1>
        <div className="features-div my-4 col-lg-6 col-10 offset-1 offset-lg-0">
          <div className="expert">
            <img src={img} alt="expert_image"/>
            <blockquote className="blockquote ml-3">
              <p>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                erat a ante.{' '}
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>

      </div>
            
        </div>

        <div className="features-div my-4 col-lg-6 col-10 offset-1 offset-lg-0">
        <div className="expert">
            <img src={img} alt="expert_image"/>
            <blockquote className="blockquote ml-3">
              <p>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                erat a ante.{' '}
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>

      </div>
        </div>
    </div>
</div>

    </>
);
};
export default Expert;