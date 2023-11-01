import "../Style.css";
import axios from "axios";

import { useState } from "react";
const Form = () => {
  const [msg,setmsg]=useState()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    Query: "",
  });

  console.log(formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/form", formData)
      .then((response) => {
        console.log(response.data);

        setFormData({
          name: "",
          email: "",
          phone: "",
          Query: "",
        });
        setmsg(response.data.msg)


        
      })
      .catch((error) => {
        console.error("Error registering:", error);
      });
  };

  return (
    <div className="getCallBack">
      <div className="getCallBack_main">
        <div className="getCallBack_main_Contanier">
          {/* left contanier */}
          <div className="getCallBack_main_Contanier_left">
            <p>Talk to our experts</p>
            <p>
              Still Confused how PrepBytes can help you achieve your dream? Talk
              to our experts
            </p>
            <div className="getCallBack_img">
              <img
                src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/call_back.svg"
                alt=""
              />
            </div>
          </div>

          {/* Right Contanier */}
          <div className="getCallBack_main_Contanier_right">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                required
                id="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <textarea
                name="Query"
                id=""
                cols="40"
                rows="20"
                autoComplete="off"
                required
                placeholder="Query"
                value={formData.Query}
                onChange={handleChange}
              ></textarea>
              <button type="submit">Request a Call Back</button>
              <p style={{color:"red"}}>
               {msg}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
