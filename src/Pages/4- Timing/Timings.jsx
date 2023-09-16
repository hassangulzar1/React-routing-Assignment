import React, { Fragment } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const Timings = () => {
  return (
    <Fragment>
      <center>
        <Header />
        <table width={"40%"} border="2px solid black">
          <tr>
            <th colspan="2">Monday-Thursday</th>
            <td colspan="2">9am - 10pm</td>
          </tr>
          <tr>
            <th colspan="2">Friday</th>
            <td>9am - 11pm</td>
          </tr>
          <tr>
            <th colspan="2">Saturday</th>
            <td>Closed</td>
          </tr>
          <tr>
            <th colspan="2">Sunday</th>
            <td>9am - 12pm</td>
          </tr>
        </table>
        <Footer />
      </center>
    </Fragment>
  );
};

export default Timings;
