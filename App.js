import { useState } from "react";
import logo from "./logo.svg";
import rightsvg from "./rightsvg.svg";
import "./App.css";
import HamburgerMenu from "./HamburgerMenu";
import image1 from "./image1.png";
import Calendar from "./Calendar";

function App() {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleBookTable = () => {
    setShowCalendar(true);
  };

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
          <HamburgerMenu />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={rightsvg} className="right" alt="right" />
        </div>
      </header>
      <section className="main">
        <section className="mainsection">
          <div className="maintext">
            <h1>Welcome to our Resturant</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
          </div>
          <img className="image1" src={image1} alt="restaurant"></img>{" "}
        </section>
        <div className="button">
          <button className="book-btn" onClick={handleBookTable}>
            Reserve a table
          </button>
        </div>
      </section>
      <section className="section2">
        {showCalendar && <Calendar year={year} month={month} />}
      </section>
    </div>
  );
}

export default App;
