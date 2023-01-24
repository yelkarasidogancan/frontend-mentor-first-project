import React from "react";
import Cabin from "../assets/portfolio/cabin.png";

const Modal = ({ open, onClose, data }) => {
  if (!open) return null;
  return (
    <div className="overlay z-20">
      <div className="modalContainer ">
        <p className="close" onClick={onClose}>
          X
        </p>
        <h1 className="h1">{data.text}</h1>
        <img className="image" src={data.image.type} alt="" />
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia
          nobis ea optio et tempora officia architecto officiis enim dolorem
          iusto nesciunt voluptatibus possimus magnam, libero fugit commodi
          doloremque aliquam.
        </p>

        <button className="closeButton" onClick={onClose}>
          Close Window
        </button>
      </div>
    </div>
  );
};

export default Modal;
