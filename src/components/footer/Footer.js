import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <>
      <div className="container-fluid border border-top mt-5  bg-dark text-white">
        <div className="container-sm">
          <div className="row">
            <div className="col-md-4  mx-auto py-4">
              <p>
                we are promised to you to give the best services,we all ensure
                that each persone get the best service,we are all with you any
                time,
              </p>
            </div>
            <div className="col-md-4  mx-auto text-center py-4">
              <h4>Contact</h4>
              <h6>
                <FontAwesomeIcon icon={faPhone} /> Our Phone Number :
                +8801516065154
              </h6>
              <h6>
                {" "}
                <FontAwesomeIcon icon={faPhone} /> Our Whatsapp Number :
                +8801516065154
              </h6>
            </div>
            <div className="col-md-4  mx-auto text-center py-4">
              <h4> Social contact</h4>
              <div className="d-flex justify-content-center gap-3">
                <h2>
                  {" "}
                  <FontAwesomeIcon icon={faFacebook} />
                </h2>
                <h2>
                  {" "}
                  <FontAwesomeIcon icon={faGoogle} />
                </h2>
                <h2>
                  {" "}
                  <FontAwesomeIcon icon={faGithub} />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
