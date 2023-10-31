import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Page.css";
import { addtocart } from "../Slice/Createslice";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector, useDispatch } from "react-redux";
function Mock_test() {
  const [verified, setVerified] = useState(false);
  const [apidata, setdata] = useState([]);
  console.log(apidata)
  const dispatch = useDispatch();
  const selelct = useSelector((state) => state.cart.data);

  console.log(selelct);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token:", token);

    axios
      .get("https://prepbytes.onrender.com/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setVerified(true);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const makepayment = async (item) => {
    const stripe = await loadStripe(
      "pk_test_51O1PDfSDn9Jvh8C8qUZncvrWSZahMESF3FeF4obkKuNq1rplszqkwgM38wkPeSTU2BAqUI1IoMD23sszROBAeWoU00ZTXXLMoJ"
    );

    const body = {
      products: [
        {
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: 1,
        },
      ],
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "https://prepbytes.onrender.com/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );
    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      console.log(result.error);
    }
  };

  const handleClick = (item) => {
    const userid = localStorage.getItem("userid");


    if (verified) {
     
      const isItemInCart = selelct.some(cartItem => cartItem.id === item.id);

      if (!isItemInCart) {
        dispatch(
          addtocart({
            id: item.id,
            img: item.img,
            name: item.name,
            price: item.price,
            quantity: 1,
          })
        );
      } else {
        console.log('Item is already in the cart.');
        // You might want to provide a message to the user indicating the item is already in the cart.
      }
    }
  };



  useEffect(() => {
    axios
      .get("https://prepbytes.onrender.com/mock")
      .then((response) => {
        setdata(response.data.mockdata);
      })
      .catch((error) => console.log(error));
  }, []);


  return (
    <>
      <div className="mock-container">
        <h2>Mock Tests</h2>
        <p>
          Technical and Aptitude Test is a very important process of most of the
          placement tests. Crack your next placement with series of PrepBytes
          practice and mock tests. Practice subject-wise and company-wise tests.
          Take real-time mock tests with other students and test your
          preparation.
        </p>
      </div>

      <div className="mock-feature">
        <div className="mock-head">
          <h2>Featured Mock Tests</h2>
        </div>
        <div className="inner-feature">
          <hr />
          <h2>PAST MOCK TESTS</h2>
          <hr />
        </div>
      </div>
      <div className="container-for-mock">
        {
        apidata.filter((item)=>item.id>=0 && item.id <=11)
        .map((item, index) => {
          return (
            <div className="inner-mock" key={index}>
              <img src={item.img} alt="" />
              <h4>{item.name}</h4>

              <div className="inner-test">
                <p>
                  {" "}
                  {item.date}
                  <br />
                  Date
                </p>

                <p>
                  {" "}
                  {item.participants}
                  <br />
                  participants
                </p>

                <p>
                  {" "}
                  {item.time}
                  <br />
                  Time
                </p>
              </div>
              {verified ? (
                <button
                  onClick={() => {
                    makepayment(item);
                    handleClick(item);
                  }}
                >
                  Buy Now
                </button>
              ) : (
                <button>
                  <Link
                    to={"/login"}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Register
                  </Link>
                </button>
              )}
            </div>
          );
        })}
      </div>

      <div className="mock-feature">
        <div className="mock-head">
          <h2>Practice Test</h2>
        </div>
        <div className="inner-feature">
          <hr />
          <h2>TOPIC WISE</h2>
          <hr />
        </div>
      </div>
      <div className="container-for-mock">
        {apidata.filter((item)=>item.id>11 && item.id <=20)
        .map((item, index) => {
          return (
            <div className="inner-mock1" key={index}>
              <img src={item.img} alt="" />
              <h4>{item.name}</h4>
              {verified ? (
                <button
                  onClick={() => {
                    makepayment(item);
                    handleClick(item);
                  }}
                >
                  Buy Now
                </button>
              ) : (
                <button>
                  <Link
                    to={"/login"}
                    style={{ color: "white", textDecoration: "none" }}>
                    Register
                  </Link>
                </button>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Mock_test;
