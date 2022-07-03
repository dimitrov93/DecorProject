import { Link } from "react-router-dom";
import { Advantages } from "./Advantages";
import { Asider } from "./Asider";
import { Navigation } from "./Navigation";
import { Products } from "./Products";


function App() {
  return (
    <div>

      <div id="page">
        <Navigation />

        <Asider />

       <Advantages />

      <Products />

        <div id="fh5co-testimonial" className="fh5co-bg-section">
          <div className="container">
            <div className="row animate-box">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <span>Testimony</span>
                <h2>Happy Clients</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <div className="row animate-box">
                  <div className="owl-carousel owl-carousel-fullwidth">
                    <div className="item">
                      <div className="testimony-slide active text-center">
                        <figure>
                          <img src="images/person1.jpg" alt="user" />
                        </figure>
                        <span>Jean Doe, via <Link to="#" className="twitter">Twitter</Link></span>
                        <blockquote>
                          <p>&ldquo;Far far away, behind the word mountains, far from the countries
                            Vokalia and Consonantia, there live the blind texts. Separated they live
                            in Bookmarksgrove right at the coast of the Semantics, a large language
                            ocean.&rdquo;</p>
                        </blockquote>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-slide active text-center">
                        <figure>
                          <img src="images/person2.jpg" alt="user" />
                        </figure>
                        <span>John Doe, via <Link to="#" className="twitter">Twitter</Link></span>
                        <blockquote>
                          <p>&ldquo;Separated they live in Bookmarksgrove right at the coast of the
                            Semantics, a large language ocean.&rdquo;</p>
                        </blockquote>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-slide active text-center">
                        <figure>
                          <img src="images/person3.jpg" alt="user" />
                        </figure>
                        <span>John Doe, via <Link to="#" className="twitter">Twitter</Link></span>
                        <blockquote>
                          <p>&ldquo;Far from the countries Vokalia and Consonantia, there live the
                            blind texts. Separated they live in Bookmarksgrove right at the coast of
                            the Semantics, a large language ocean.&rdquo;</p>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div id="fh5co-counter" className="fh5co-bg fh5co-counter" >
          <div className="container">
            <div className="row">
              <div className="display-t">
                <div className="display-tc">
                  <div className="col-md-3 col-sm-6 animate-box">
                    <div className="feature-center">
                      <span className="icon">
                        <i className="icon-eye"></i>
                      </span>

                      <span className="counter js-counter" data-from="0" data-to="22070" data-speed="5000"
                        data-refresh-interval="50">1</span>
                      <span className="counter-label">Creativity Fuel</span>

                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 animate-box">
                    <div className="feature-center">
                      <span className="icon">
                        <i className="icon-shopping-cart"></i>
                      </span>

                      <span className="counter js-counter" data-from="0" data-to="450" data-speed="5000"
                        data-refresh-interval="50">1</span>
                      <span className="counter-label">Happy Clients</span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 animate-box">
                    <div className="feature-center">
                      <span className="icon">
                        <i className="icon-shop"></i>
                      </span>
                      <span className="counter js-counter" data-from="0" data-to="700" data-speed="5000"
                        data-refresh-interval="50">1</span>
                      <span className="counter-label">All Products</span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 animate-box">
                    <div className="feature-center">
                      <span className="icon">
                        <i className="icon-clock"></i>
                      </span>

                      <span className="counter js-counter" data-from="0" data-to="5605" data-speed="5000"
                        data-refresh-interval="50">1</span>
                      <span className="counter-label">Hours Spent</span>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="fh5co-started">
          <div className="container">
            <div className="row animate-box">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2>Newsletter</h2>
                <p>Just stay tune for our latest Product. Now you can subscribe</p>
              </div>
            </div>
            <div className="row animate-box">
              <div className="col-md-8 col-md-offset-2">
                <form className="form-inline">
                  <div className="col-md-6 col-sm-6">
                    <div className="form-group">
                      <label forhtml="email" className="sr-only">Email</label>
                      <input type="email" className="form-control" id="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <button type="submit" className="btn btn-default btn-block">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <footer id="fh5co-footer" role="contentinfo">
          <div className="container">
            <div className="row row-pb-md">
              <div className="col-md-4 fh5co-widget">
                <h3>Shop.</h3>
                <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta
                  adipisci architecto culpa amet.</p>
              </div>
              <div className="col-md-2 col-sm-4 col-xs-6 col-md-push-1">
                <ul className="fh5co-footer-links">
                  <li><Link to="#">About</Link></li>
                  <li><Link to="#">Help</Link></li>
                  <li><Link to="#">Contact</Link></li>
                  <li><Link to="#">Terms</Link></li>
                  <li><Link to="#">Meetups</Link></li>
                </ul>
              </div>

              <div className="col-md-2 col-sm-4 col-xs-6 col-md-push-1">
                <ul className="fh5co-footer-links">
                  <li><Link to="#">Shop</Link></li>
                  <li><Link to="#">Privacy</Link></li>
                  <li><Link to="#">Testimonials</Link></li>
                  <li><Link to="#">Handbook</Link></li>
                  <li><Link to="#">Held Desk</Link></li>
                </ul>
              </div>

              <div className="col-md-2 col-sm-4 col-xs-6 col-md-push-1">
                <ul className="fh5co-footer-links">
                  <li><Link to="#">Find Designers</Link></li>
                  <li><Link to="#">Find Developers</Link></li>
                  <li><Link to="#">Teams</Link></li>
                  <li><Link to="#">Advertise</Link></li>
                  <li><Link to="#">API</Link></li>
                </ul>
              </div>
            </div>

            <div className="row copyright">
              <div className="col-md-12 text-center">
                <p>
                  <small className="block">&copy; 2016 Free HTML5. All Rights Reserved.</small>
                  <small className="block">Designed by <Link to="http://freehtml5.co/"
                    target="_blank">FreeHTML5.co</Link> Demo Images: <Link to="http://blog.gessato.com/"
                      target="_blank">Gessato</Link> &amp; <Link to="http://unsplash.co/"
                        target="_blank">Unsplash</Link></small>
                </p>
                <span>
                  <ul className="fh5co-social-icons">
                    <li><Link to="#"><i className="icon-twitter"></i></Link></li>
                    <li><Link to="#"><i className="icon-facebook"></i></Link></li>
                    <li><Link to="#"><i className="icon-linkedin"></i></Link></li>
                    <li><Link to="#"><i className="icon-dribbble"></i></Link></li>
                  </ul>
                </span>
              </div>
            </div>

          </div>
        </footer>
      </div>
      
    </div>
  );
}

export default App;
