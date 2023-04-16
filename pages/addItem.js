import React, { useState, useRef, useEffect } from "react";
import styles from "./addItem.module.css";

const AddItemPage = () => {
  // to change disease names/size, you only need to change the names in the list
  // and the name in the signUpForm useState
  const univList = ["Select University", "Northwestern University"];
  const condList = ["Select Condition", "brand new", "new", "used", "damanged", "dysfunctional"];
  const date = new Date();

  const [hasPrice, setHasPrice] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [info, setInfo] = useState([]);
  const [itemInfo, setItemInfo] = useState({
    id: 1,
    seller_id: "a",
    name: "",
    description: "",
    original_price: "",
    univ: "",
    condition: "",
    sold: 0,
    price: 0,
  });

  useEffect(() => {
    if (hasPrice == 1) {
      setTimeout(() => {
        setHasPrice(2);
        setItemInfo({ ...itemInfo, [price]: 1270 })
      }, 1500);
    } 
  })

  function handleFileChange(event) {
    setSelectedFile(event.target.files[0]);
  }

  async function handleUpload() {
    const formData = new FormData();
    formData.append("image", selectedFile);
    try {
      const response = await fetch("/upload", {
        method: "POST",
        body: formData,
      });
      console.log("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setItemInfo({ ...itemInfo, [name]: value });
  };

  const handlePricing = (e) => {
    e.preventDefault();
    if (
      itemInfo.name &&
      itemInfo.univ &&
      itemInfo.condition &&
      itemInfo.univ != "Select University" &&
      itemInfo.condition != "Select Condition" &&
      selectedFile != null
    ) {
      const newForm = { ...itemInfo, id: new Date().getTime().toString() };
      console.log(newForm);
      setInfo([...info, newForm]);
      setHasPrice(1);
    } else {
      alert("Missing Fields!");
    }
  };

  const handleSubmitYes = (e) => {
    e.preventDefault();
    payload = {
      "id" : 0,
      "uid" : "a",
      "name" : itemInfo.name,
      "condition" : itemInfo.condition,
      "sold" : 0,
      "price": itemInfo.price,
      "base": "Northwestern",
      "description": itemInfo.description,
      "date_added" : date,
    }
    fetch("http://localhost:4000/item/", { 
      method: "POST", 
      headers: { "Content-Type": "application/json" }, 
      body: JSON.stringify(payload), 
      }) 
        .then((res) => res.json()) 
        .then((data) => {
          setClientSecret(data.clientSecret) 
          setTotal(formatter.format(data.amount)) 
          console.log(data)
        }) 
  };

  const handleSubmitNo = (e) => {
    e.preventDefault();
    setHasPrice(0);
  };

  const handleReturnHomepage = (e) => {
    e.preventDefault();
    // Go back to homepage dashboard
  }

  if (hasPrice == 0) {
    return (
      <>
        <main className={styles.page}>
          <button className={styles.returnButton} onClick={handleReturnHomepage}>Return</button>
          <h2 className={styles.signUp}> Add the item you want to sell! </h2>
          <ItemInfo
            itemInfo={itemInfo}
            handleChange={handleChange}
            condList={condList}
            univList={univList}
          />
          <UploadImage
            itemInfo={itemInfo}
            handleChange={handleChange}
            handleFileChange={handleFileChange}
            handleUpload={handleUpload}
          />
        
          <div className={styles.submitDiv}>
            <button
              className={styles.submitButton}
              type="submit"
              onClick={handlePricing}
            >
              Estimate the price!
            </button>
          </div>
        </main>
      </>
    )
  } else if (hasPrice == 1) {
    return (
      <>
        <main className={styles.page}>
          <h2 className={styles.signUp}> Add the item you want to sell! </h2>
          <ItemInfo
            itemInfo={itemInfo}
            handleChange={handleChange}
            condList={condList}
            univList={univList}
          />
        
          <div className={styles.submitDiv}>
            <div className={styles.pricingPrompt}>
              Estimating your item's fair price...
            </div>
          </div>
        </main>
      </>
    )
  } else {
    return (
      <>
        <main className={styles.page}>
          <h2 className={styles.signUp}> Add the item you want to sell! </h2>
          <ItemInfo
            itemInfo={itemInfo}
            handleChange={handleChange}
            condList={condList}
            univList={univList}
          />
        
          <div className={styles.submitDiv}>
            <div className={styles.pricingPrompt}>
              We've priced your item as <u><b>1270 WeX</b></u> tokens, add to marketplace?
            </div>
            <button className={styles.submitButton} 
                    type="submit" 
                    onClick={handleSubmitYes}>
              Yes
            </button>
            <button className={styles.submitButton} 
                    type="submit" 
                    onClick={handleSubmitNo}>
              No
            </button>
          </div>
        </main>
      </>
    )
  }
};

// Nested Components
const ItemInfo = ({ itemInfo, handleChange, condList, univList }) => {
  return (
    <form className={styles.formControl}>
      <div className={styles.sectionTitle}> Item Description </div>
      <input
        className={styles.wholeBlockInput}
        type="text"
        name="name"
        value={itemInfo.name}
        placeholder="Item Name"
        onChange={handleChange}
      />

      <input
        className={styles.wholeBlockParagraphInput}
        type="text"
        name="description"
        value={itemInfo.description}
        placeholder="Detailed description"
        onChange={handleChange}
      />

      <input
        className={styles.wholeBlockInput}
        type="text"
        name="original_price"
        value={itemInfo.original_price}
        placeholder="Original Price"
        onChange={handleChange}
      />

      <div>
        <select
          className={styles.selectedState1}
          onChange={handleChange}
          value={itemInfo.condition}
          name="condition"
        >
          {condList.map((condition) => {
            return (
              <option value={condition} key={condList.indexOf(condition)}>
                {condition}
              </option>
            );
          })}
        </select>

        <select
          className={styles.selectedState2}
          onChange={handleChange}
          value={itemInfo.univ}
          name="univ"
        >
          {univList.map((univ) => {
            return (
              <option value={univ} key={univList.indexOf(univ)}>
                {univ}
              </option>
            );
          })}
        </select>
      </div>
    </form>
  );
};


const UploadImage = ({ itemInfo, handleChange, handleFileChange, handleUpload }) => {
  return (
    <form className={styles.formControl}>
      <div className={styles.sectionTitle}> Upload Item Image for Inspection </div>  
        <div className={styles.wholeBlockInput}>
          <input type="file" className={styles.button} onChange={handleFileChange} />
          {/* <button onClick={handleUpload} className={styles.button}>Upload</button> */}
        </div>
    </form>
  )
}

export default AddItemPage;
