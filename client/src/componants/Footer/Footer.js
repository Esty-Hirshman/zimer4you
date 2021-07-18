import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div id="footer">
      <div className="container">
        <div className="row text-center text-xs-center text-sm-left text-md-left">
          <div className="col-xs-12 col-sm-4 col-md-4 name-zimer4you">
            <br />
            <h2>zimer4you</h2>
            <h4>zimerforyou@gmail.com</h4>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                <ul className="list-unstyled list-inline social text-center">
                  <li className="list-inline-item">
                    <a href="https://developers.facebook.com/docs/facebook-login/">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://apps.apple.com/us/app/twitter/id333903271">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.fiverr.com/share/qb8D02">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.giladhan.co.il/%D7%90%D7%99%D7%A0%D7%A1%D7%98%D7%92%D7%A8%D7%9D_Instagram">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://mail.google.com/mail/u/2/#inbox"
                      target="_blank"
                    >
                      <i className="fa fa-envelope"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>גישה מהירה</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <a href="/">
                  Home<i className="fa fa-angle-double-right"></i>
                </a>
              </li>
              <li>
                <a href="About">
                  אודות<i className="fa fa-angle-double-right"></i>
                </a>
              </li>
              <li>
                <a href="/ZimerList">
                  רשימת צימרים<i className="fa fa-angle-double-right"></i>
                </a>
              </li>
              <li>
                <a href="/Questions">
                  שאלות נפוצות<i className="fa fa-angle-double-right"></i>
                </a>
              </li>
              <li>
                <a href="/AddZimer">
                  פרסם את הצימר שלך<i className="fa fa-angle-double-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p className="h6">© All right Reversed.</p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Footer;
