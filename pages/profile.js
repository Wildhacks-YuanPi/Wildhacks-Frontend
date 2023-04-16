import React, { useState, useRef } from "react";
// import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import styles from "./profile.module.css";

const ProfilePage = () => {
  const pastOrdersList = [
    ["00314", "01/22/23", "Casio Edifice Toro Rosso Edition"],
    ["02425", "04/01/23", "Lego Bugatti"],
    ["10478", "04/14/23", "Math 366 Textbook"],
  ];
  const downloadList = [["Econ 310-2 textbook", "50 WeX", "Pending"],
                        ["Twin-sized mattress", "150WeX", "In transaction"],
                        ["Starbucks Reserve coffee mug", "30WeX", "Completed"]];
  
  const [signUpForm, setSignUpForm] = useState({
    firstName: "Jerry",
    lastName: "Cao",
    email: "jerrycao2025@u.northwestern.edu",
    password: "lolol",
    school: "Northwestern University",
    description: "Hi, this is Jerry!",
    clinicName: "John Doe",
    clinicAddress: "Johndoe Ave",
    clinicCity: "Evanston",
    clinicZipCode: "60201",
    clinicState: "IL",
  });

  const [suppliesForm, setSuppliesForm] = useState({
    Option1: 0,
    Option2: 0,
    Option3: 0,
    Option4: 0,
    Enzyme1: 0,
    Enzyme2: 0,
    Enzyme3: 0,
    Enzyme4: 0,
  });

  const [info, setInfo] = useState([]);
  const ref1 = useRef([]);
  const ref2 = useRef([]);

  const isLast = (pastOrdersList, order) => {
    return pastOrdersList.indexOf(order) === pastOrdersList.length - 1;
  };

  const handleProfileChange = (e) => {
    if (e.target.type === "number") {
      const name = e.target.name;
      const value = e.target.value;
      setSuppliesForm({ ...suppliesForm, [name]: value });
    } else {
      const name = e.target.name;
      const value = e.target.value;
      setSignUpForm({ ...signUpForm, [name]: value });
    }
  };


  return (
    <>
      <div className={styles.page}>
        <section className={styles.menu} />
        <section className={styles.main}>
          <Navbar />
          <main>
            <Profile
              signUpForm={signUpForm}
              handleProfileChange={handleProfileChange}
            />
            <PastOrders pastOrdersList={pastOrdersList} isLast={isLast} />
            <MySales downloadList={downloadList} />
          </main>
        </section>
      </div>
    </>
  );
}

const WeXToken = () => {
  const file_path = "../coin.jpeg"
  return (
    <div width="300">
      <div float="left" width="30%">
        <img src="coin.jpeg" 
            alt="A coin"
            width="70"
            bottom-left="500px">
        </img> 
      </div>
      <div font-size="20px" float="left" width="70%">
        WeXToken: 1000
      </div>
    </div>
  )
}

const Navbar = () => {
  return (
    <nav className={styles.navSection}>
      <div className={styles.navList}>
        <a className={styles.navItem} href="#profile">
          Profile
        </a>
        <a className={styles.navItem} href="#pastOrders">
          Past Orders
        </a>
        <a className={styles.navItem} href="#downloads">
          Downloads
        </a>
      </div>
    </nav>
  );
};


const PastOrders = ({ pastOrdersList, isLast }) => {
  return (
    <section className={styles.section}>
      <div className={styles.subtitle}>Past Orders</div>
      <div className={styles.orderSubtitle}>
        <div>Order #</div>
        <div>Date Placed</div>
        <div>Item Traded</div>
      </div>
      {pastOrdersList.map((order) => {
        return (
          <div
            className={
              isLast(pastOrdersList, order) ? styles.lastOrderInfo : styles.orderInfo
            }
            id="downloads"
            key={pastOrdersList.indexOf(order)}
          >
            <div className={styles.orderNum}>{order[0]}</div>
            <div>{order[1]}</div>
            <div>{order[2]}</div>
          </div>
        );
      })}
    </section>
  );
};

const MySales = ({ downloadList }) => {
  return (
    <section>
      <div className={styles.subtitle}>My Items on Sale</div>

      {downloadList.map((download) => {
        return (
          <div className={styles.downloadButton} key={downloadList.indexOf(download)}>
            <div className={styles.saleInfo}> 
              <div>{download[0]}</div>
              <div>{download[1]}</div>
              <div>{download[2]}</div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

const Profile = ({ signUpForm, handleProfileChange, stateList }) => {
  return (
    <div className={styles.subtitle} id="profile">
    Profile
    {/* <WeXToken></WeXToken> */}
      <div className={styles.wrapper}>

        <div className ={styles.sidebyside} id="profile">
          <div className={styles.nameAndEmail}>
            <div className={styles.nameSub}>
              <div>
                <input
                  className={styles.name}
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={signUpForm.firstName}
                  placeholder={signUpForm.firstName}
                  onChange={handleProfileChange}
                />
                <div className={styles.nameAndEmailLabel} htmlFor="firstName">
                  First Name
                </div>
              </div>

              <div>
                <input
                  className={styles.name}
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={signUpForm.lastName}
                  placeholder={signUpForm.lastName}
                  onChange={handleProfileChange}
                />
                <div className={styles.nameAndEmailLabel} htmlFor="lastName">
                  Last Name
                </div>
              </div>
            </div>

            <div className={styles.emailContainer}>
              <input
                className={styles.name}
                type="text"
                name="email"
                id="email"
                value={signUpForm.email}
                placeholder={signUpForm.email}
                onChange={handleProfileChange}
              />
              <div className={styles.nameAndEmailLabel} htmlFor="email">
                Email
              </div>
            </div>
          </div>

          <div className={styles.nameAndEmail}>
            <div className={styles.emailContainer}>
              <div>
                <input
                  className={styles.name}
                  type="text"
                  name="school"
                  id="school"
                  value={signUpForm.school}
                  placeholder="School"
                  onChange={handleProfileChange}
                />
                <div className={styles.nameAndEmailLabel} htmlFor="clinicName">
                  School
                </div>
              </div>
            </div>
          </div>

          <div className={styles.nameAndEmail}>
            <div className={styles.emailContainer}>
              <div>
                <textarea
                  className={styles.description}
                  font="sans-serif"
                  type="text"
                  name="description"
                  id="description"
                  value={signUpForm.description}
                  placeholder="Tell something about yourself!"
                  onChange={handleProfileChange}
                />
                <div className={styles.nameAndEmailLabel} htmlFor="clinicName">
                  Description
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <WeXToken></WeXToken>
        <div className={styles.whitespace1}></div>
        
      </div>
      <div className={styles.whitespace2}></div>
    </div>
  );
};


export default ProfilePage;
