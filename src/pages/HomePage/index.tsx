import all from "../../assets/all.svg";
import person from "../../assets/Person.svg";
import setting from "../../assets/Settings.svg";
import email from "../../assets/Email.svg";
import account from "../../assets/Account.svg";
import search from "../../assets/search.svg";
import veggiepizza from "../../assets/veggiepizza.png";
import "./index.css";
import MyButton from "../../components/Re-Button";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="home-page-left-container">
        {/* icons set */}

        <div className="all-bookings-container">
          <img src={all} className="all-icon" />
          <div className="all-another-icons">
            <img src={person} className="all-icon-unselect" />
            <img src={account} className="all-icon-unselect" />
            <img src={setting} className="all-icon-unselect" />
            <img src={email} className="all-icon-unselect" />
          </div>
        </div>
      </div>
      <div className="home-page-middle-container">
        <div className="middle-container-hello-row">
          <div className="hello-row-left">
            <div className="hello-row-name-top">Hello John</div>
            <div className="hello-row-name-bottom">Welcome Back</div>
          </div>
          <div className="hello-row-right">
            <div className="hello-right-search">
              <img src={search} alt="" className="search-icon" />
            </div>
            <input
              type="text"
              className="hello-row-input"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="middle-middle-container-banner">
          <div className="banner-left">
            <div className="banner-left-text">
              Make Your First Order
              <br />
              and Get <span className="banner-left-discount">50% Off</span>
            </div>
            <div className="banner-left-para-text">
              Discover the unparalleled joy of our gourmet pizza, crafted with
              the finest ingredients and baked to perfection. Each slice is a
              symphony of flavors, with a crispy crust, rich tomato sauce, and
              an irresistible blend of cheeses that melt in your mouth.
            </div>

            <div className="banner-order-now-button">
              <MyButton />
            </div>
          </div>
          <div className="banner-right"></div>
        </div>
      </div>
      <div className="home-page-right-container"></div>
    </div>
  );
};

export default HomePage;
