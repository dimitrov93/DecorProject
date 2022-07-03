import { Link } from "react-router-dom";


export const Advantages = () => {
    return (
        <div id="fh5co-services" className="fh5co-bg-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4 text-center">
              <div className="feature-center animate-box" data-animate-effect="fadeIn">
                <span className="icon">
                  <i className="icon-credit-card"></i>
                </span>
                <h3>Credit Card</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                  there live the blind texts. Separated they live in Bookmarksgrove</p>
                <p><Link to="#" className="btn btn-primary btn-outline">Learn More</Link></p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 text-center">
              <div className="feature-center animate-box" data-animate-effect="fadeIn">
                <span className="icon">
                  <i className="icon-wallet"></i>
                </span>
                <h3>Save Money</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                  there live the blind texts. Separated they live in Bookmarksgrove</p>
                <p><Link to="#" className="btn btn-primary btn-outline">Learn More</Link></p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 text-center">
              <div className="feature-center animate-box" data-animate-effect="fadeIn">
                <span className="icon">
                  <i className="icon-paper-plane"></i>
                </span>
                <h3>Free Delivery</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                  there live the blind texts. Separated they live in Bookmarksgrove</p>
                <p><Link to="#" className="btn btn-primary btn-outline">Learn More</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}