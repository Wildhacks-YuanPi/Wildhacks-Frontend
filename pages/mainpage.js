import React, { useState, useRef, useEffect } from "react";
import styles from "./mainpage.module.css";
import { Tree } from "antd";

const treeData = [
  {
    title: "Category",
    key: "0-0",
    children: [
      {
        title: "Electronics",
        key: "0-0-0",
      },
      {
        title: "Watches",
        key: "0-0-1",
      },
      {
        title: "Clothes",
        key: "0-0-2",
      },
    ],
  },
  {
    title: "Location",
    key: "0-1",
    children: [
      {
        title: "Northwestern",
        key: "0-1-0",
      },
      {
        title: "Others",
        key: "0-1-1",
      },
    ],
  },
  {
    title: "Price Range",
    key: "0-2",
    children: [
      {
        title: "$1-50",
        key: "0-2-0",
      },
      {
        title: "$51-100",
        key: "0-2-1",
      },
      {
        title: "$100+",
        key: "0-1-0-2",
      },
    ],
  },
];

const mainpage = () => {
  let itemList = [{ img: "thumbnail-1.webp" }, {}, {}, {}, {}, {}, {}];

  const [expandedKeys, setExpandedKeys] = useState(["0-0-0", "0-0-1"]);
  const [checkedKeys, setCheckedKeys] = useState(["0-0-0"]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const onExpand = (expandedKeysValue) => {
    console.log("onExpand", expandedKeysValue);
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };
  const onCheck = (checkedKeysValue) => {
    console.log("onCheck", checkedKeysValue);
    setCheckedKeys(checkedKeysValue);
  };
  const onSelect = (selectedKeysValue, info) => {
    console.log("onSelect", info);
    setSelectedKeys(selectedKeysValue);
  };

  return (
    <div>
      <div className={styles.body}>
        <header className={styles.header}>
          <div className={styles.leftSection}>
            <img
              className={styles.hamburgerMenu}
              src="icons/hamburger-menu.svg"
            />
            <img
              className={styles.wexchangeLogo}
              src="icons/wexchangeLogo.png"
            />
          </div>
          <div className={styles.middleSection}>
            <input
              className={styles.searchBar}
              type="text"
              placeholder="Search"
            />
            <button className={styles.searchButton}>
              <img className={styles.searchIcon} src="icons/search.svg" />
              <div className={styles.tooltip}>Search</div>
            </button>
            <button className={styles.voiceSearchButton}>
              <img
                className={styles.voiceSearchIcon}
                src="icons/voice-search-icon.svg"
              />
              <div className={styles.tooltip}>Search with your voice</div>
            </button>
          </div>
          <div className={styles.rightSection}>
            <div className={styles.notificationsIconContainer}>
              <img
                className={styles.notificationsIcon}
                src="icons/notifications.svg"
              />
              <div className={styles.notificationsCount}>3</div>
              <div className={styles.tooltip}>Notifications</div>
            </div>

            <img
              className={styles.currentUserPicture}
              src="channel-pictures/profilePic.jpg"
            />
          </div>
        </header>

        <nav className={styles.sidebar}>
          <div className={styles.tree}>
            <Tree
              checkable
              onExpand={onExpand}
              expandedKeys={expandedKeys}
              autoExpandParent={autoExpandParent}
              onCheck={onCheck}
              checkedKeys={checkedKeys}
              onSelect={onSelect}
              selectedKeys={selectedKeys}
              treeData={treeData}
            />
          </div>
        </nav>

        <main>
          <section>
            <div className={styles.itemRowLayout}>
              <div>
                <img className={styles.img} src="thumbnails/thumbnail-1.webp" />
              </div>
              <div className={styles.itemDetail}>
                <div className={styles.itemName}>
                  Reebok EX-O-FIT Hi Men's Shoes
                </div>
                <div className={styles.usage}>Brand New</div>
                <div className={styles.price}>$10</div>
                <div className={styles.description}>
                  This shoe is literally so cool, oh my god. I am going to cry
                  when it gets bought by someone else qwq.
                </div>
                <button className={styles.location}>
                  Location: Northwestern
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default mainpage;
