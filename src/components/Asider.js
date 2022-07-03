import { Link } from "react-router-dom";

export const Asider = () => {
    return (
        <aside id="fh5co-hero" className="js-fullheight">
        <div className="flexslider js-fullheight">
          <ul className="slides">
            <div style={{backgroundImage: "url(images/img_bg_1.jpg)"}}>
              <div className="overlay-gradient"></div>
              <div className="container">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 js-fullheight slider-text">
                  <div className="slider-text-inner">
                    <div className="desc">
                      <span className="price">$800</span>
                      <h2>Alato Cabinet</h2>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and
                        Consonantia, there live the blind texts. Separated they live in
                        Bookmarksgrove.</p>
                      <p><Link to="single.html" className="btn btn-primary btn-outline btn-lg">Purchase
                        Now</Link></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <li style={{backgroundImage: "url(images/img_bg_4.jpg)"}}>
              <div className="container">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 js-fullheight slider-text">
                  <div className="slider-text-inner">
                    <div className="desc">
                      <span className="price">$540</span>
                      <h2>The WW Chair</h2>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and
                        Consonantia, there live the blind texts. Separated they live in
                        Bookmarksgrove.</p>
                      <p><Link to="single.html" className="btn btn-primary btn-outline btn-lg">Purchase
                        Now</Link></p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    )
}