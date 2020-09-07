
import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import PaintPage from "./PaintPage";

const Artist = () => {

return(
    <>


        <div className="header">
        </div>
        <div>
        <form className="form_cat form-inline d-flex flex-row justify-content-center align-items-center">
      <input className="form-control col-6 col-lg-6 col-md-6" type="search" placeholder="Search by name" aria-label="Search" />
      <button className="btn btn-primary float-right" type="submit"><SearchIcon/></button>
    </form>
        </div>

        <div className="container">
            <h1 className="text-light text-center my-5">Some Famous Artist</h1>
            <div className="row">
                <div className="col-10 col-offset-2 col-lg-6">
                <div className="card artist_card">
                <img src="https://storage.googleapis.com/ehimages/2017/10/25/img_942b5703ed4c5d3b242a34f7cc87d9c0_1508933938684_processed_original.jpg" alt="mypic" className="card_img" />
                
                <blockquote className="blockquote ml-3 text-white">
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

                <div className="col-10 col-offset-2 col-lg-6">
                <div className="card artist_card">
                <img src="https://storage.googleapis.com/ehimages/2017/10/25/img_942b5703ed4c5d3b242a34f7cc87d9c0_1508933938684_processed_original.jpg" alt="mypic" className="card_img" />
                
                <blockquote className="blockquote ml-3 text-white">
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

                <div className="col-10 col-offset-2 col-lg-6">
                <div className="card artist_card">
                <img src="https://storage.googleapis.com/ehimages/2017/10/25/img_942b5703ed4c5d3b242a34f7cc87d9c0_1508933938684_processed_original.jpg" alt="mypic" className="card_img" />
                
                <blockquote className="blockquote ml-3 text-white">
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

                <div className="col-10 col-offset-2 col-lg-6">
                <div className="card artist_card">
                <img src="https://storage.googleapis.com/ehimages/2017/10/25/img_942b5703ed4c5d3b242a34f7cc87d9c0_1508933938684_processed_original.jpg" alt="mypic" className="card_img" />
                
                <blockquote className="blockquote ml-3 text-white">
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

                <div className="col-10 col-offset-2 col-lg-6">
                <div className="card artist_card">
                <img src="https://storage.googleapis.com/ehimages/2017/10/25/img_942b5703ed4c5d3b242a34f7cc87d9c0_1508933938684_processed_original.jpg" alt="mypic" className="card_img" />
                
                <blockquote className="blockquote ml-3 text-white">
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

                <div className="col-10 col-offset-2 col-lg-6">
                <div className="card artist_card">
                <img src="https://storage.googleapis.com/ehimages/2017/10/25/img_942b5703ed4c5d3b242a34f7cc87d9c0_1508933938684_processed_original.jpg" alt="mypic" className="card_img" />
                
                <blockquote className="blockquote ml-3 text-white">
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


                <div className="col-10 col-offset-2 col-lg-6">
                <div className="card artist_card">
                <img src="https://storage.googleapis.com/ehimages/2017/10/25/img_942b5703ed4c5d3b242a34f7cc87d9c0_1508933938684_processed_original.jpg" alt="mypic" className="card_img" />
                
                <blockquote className="blockquote ml-3 text-white">
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

                <div className="col-10 col-offset-2 col-lg-6">
                <div className="card artist_card">
                <img src="https://storage.googleapis.com/ehimages/2017/10/25/img_942b5703ed4c5d3b242a34f7cc87d9c0_1508933938684_processed_original.jpg" alt="mypic" className="card_img" />
                
                <blockquote className="blockquote ml-3 text-white">
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
        <PaintPage />
    </>
);
};
export default Artist;

