import { Link } from "react-router-dom";


export const Navigation = () => {
    return (
        <nav className="fh5co-nav" role="navigation">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-xs-2">
              <div id="fh5co-logo"><Link to="index.html">Shop.</Link></div>
            </div>
            <div className="col-md-6 col-xs-6 text-center menu-1">
              <ul>
                <li className="has-dropdown">
                  <Link to="product.html">Shop</Link>
                  <ul className="dropdown">
                    <li><Link to="single.html">Single Shop</Link></li>
                  </ul>
                </li>
                <li><Link to="about.html">About</Link></li>
                <li className="has-dropdown">
                  <Link to="services.html">Services</Link>
                  <ul className="dropdown">
                    <li><Link to="#">Web Design</Link></li>
                    <li><Link to="#">eCommerce</Link></li>
                    <li><Link to="#">Branding</Link></li>
                    <li><Link to="#">API</Link></li>
                  </ul>
                </li>
                <li><Link to="contact.html">Contact</Link></li>
              </ul>
            </div>
            <div className="col-md-3 col-xs-4 text-right hidden-xs menu-2">
              <ul>
                <li className="search">
                  <div className="input-group">
                    <input type="text" placeholder="Search.." />
                    <span className="input-group-btn">
                      <button className="btn btn-primary" type="button"><i
                        className="icon-search"></i></button>
                    </span>
                  </div>
                </li>
                <li className="shopping-cart"><Link to="#" className="cart"><span><small>0</small><i
                  className="icon-shopping-cart"></i></span></Link></li>
              </ul>
            </div>
          </div>

        </div>
      </nav>
    );
}