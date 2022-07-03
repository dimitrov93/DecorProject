import { Link } from "react-router-dom";

export const Products = () => {
    return (
        <div id="fh5co-product">
        <div className="container">
          <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <span>Cool Stuff</span>
              <h2>Products.</h2>
              <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem
                provident. Odit ab aliquam dolor eius.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center animate-box">
              <div className="product">
                <div className="product-grid" >
                  <div className="inner">
                    <p>
                      <Link to="single.html" className="icon"><i className="icon-shopping-cart"></i></Link>
                      <Link to="single.html" className="icon"><i className="icon-eye"></i></Link>
                    </p>
                  </div>
                </div>
                <div className="desc">
                  <h3><Link to="single.html">Hauteville Concrete Rocking Chair</Link></h3>
                  <span className="price">$350</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="product">
                <div className="product-grid" >
                  <span className="sale">Sale</span>
                  <div className="inner">
                    <p>
                      <Link to="single.html" className="icon"><i className="icon-shopping-cart"></i></Link>
                      <Link to="single.html" className="icon"><i className="icon-eye"></i></Link>
                    </p>
                  </div>
                </div>
                <div className="desc">
                  <h3><Link to="single.html">Pavilion Speaker</Link></h3>
                  <span className="price">$600</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="product">
                <div className="product-grid" >
                  <div className="inner">
                    <p>
                      <Link to="single.html" className="icon"><i className="icon-shopping-cart"></i></Link>
                      <Link to="single.html" className="icon"><i className="icon-eye"></i></Link>
                    </p>
                  </div>
                </div>
                <div className="desc">
                  <h3><Link to="single.html">Ligomancer</Link></h3>
                  <span className="price">$780</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center animate-box">
              <div className="product">
                <div className="product-grid" >
                  <div className="inner">
                    <p>
                      <Link to="single.html" className="icon"><i className="icon-shopping-cart"></i></Link>
                      <Link to="single.html" className="icon"><i className="icon-eye"></i></Link>
                    </p>
                  </div>
                </div>
                <div className="desc">
                  <h3><Link to="single.html">Alato Cabinet</Link></h3>
                  <span className="price">$800</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="product">
                <div className="product-grid" >
                  <div className="inner">
                    <p>
                      <Link to="single.html" className="icon"><i className="icon-shopping-cart"></i></Link>
                      <Link to="single.html" className="icon"><i className="icon-eye"></i></Link>
                    </p>
                  </div>
                </div>
                <div className="desc">
                  <h3><Link to="single.html">Earing Wireless</Link></h3>
                  <span className="price">$100</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="product">
                <div className="product-grid" >
                  <div className="inner">
                    <p>
                      <Link to="single.html" className="icon"><i className="icon-shopping-cart"></i></Link>
                      <Link to="single.html" className="icon"><i className="icon-eye"></i></Link>
                    </p>
                  </div>
                </div>
                <div className="desc">
                  <h3><Link to="single.html">Sculptural Coffee Table</Link></h3>
                  <span className="price">$960</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}