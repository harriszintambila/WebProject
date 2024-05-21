import React from "react";
import "./BookingPage.css";
import NumberBox from "./state";
import { BrowserRouter, Form, Link } from "react-router-dom";

export default function Bookingpage() {
  return (
    <div>
      <body>
        <div className="bar1">Your booking Details</div>
        <div className="container">
          <div className="box">Executive Suite</div>
          <div className="box">
            <p>
              The centerpiece of the room is the lavish<br></br>
              king-sized bed, adorned with crisp, <br></br>
              high-thread-count linens and plump <br></br>
              pillows, promising a night of rejuvenating sleep.{" "}
            </p>
          </div>
        </div>
        <div className="bar5"></div>+<div className="bar6"></div>
        <b></b>
        <button class="button">
          <Link to="Forms">Proceed to Check in</Link>
        </button>
        <div className="bar4">
          <p>Number of Guests</p> <NumberBox></NumberBox>
        </div>
      </body>
    </div>
  );
}
