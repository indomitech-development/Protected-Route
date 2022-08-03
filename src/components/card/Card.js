import React from "react";
import { useNavigate } from "react-router-dom";
import { Data } from "../../constant/Data";
export default function Card() {
  const [data, setData] = React.useState(Data);
  const navigate = useNavigate();
  const handelClick = () => {
    navigate("/cart");
  };

  return (
    <div className="container">
      <div className="row">
        {data.map((item) => {
          return (
            <div
              className="card"
              style={{ width: "18rem", marginLeft: "70px", marginTop: "10px" }}
            >
              <img
                className="card-img-top w-100"
                src={item.src}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{item.card_Title}</h5>
                <p className="card-text">{item.card_Data}</p>
                <a className="btn btn-primary w-50" onClick={handelClick}>
                  {item.card_Button}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
