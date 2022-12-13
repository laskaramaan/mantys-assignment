import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { store } from "../../app/store";
import { updateSlot } from "../../features/slot/slotSlice";
import "./BookingModal.css";
import { FaTimes } from "react-icons/fa";
const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const BookingModal = ({
  modalIsOpen,
  afterOpenModal,
  closeModal,
  selectedSlot,
  selectedDay,
}) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const slots = store.getState().slot[selectedDay];

  const validate = () => {
    if (name === "" || number === "" || number.length !== 10) {
      alert("Please enter valid details");
      return false;
    }
   
    return true;
  }

  useEffect(() => {
    for (const slot of slots) {
      //  console.log(slot)
      if (selectedSlot === slot.id) {
        setName(slot?.information?.name);
        setNumber(slot?.information?.number);
      }
    }
  }, [selectedSlot, selectedDay, slots]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!validate()) 
    return;

    const newSlots = [];
    for (const slot of slots) {
      if (selectedSlot === slot.id) {
        newSlots.push({
          id: slot.id,
          time: slot.time,
          information: { name: name, number: number },
        });
      } else {
        newSlots.push(slot);
      }
    }
    // console.log(newSlots)
    dispatch(updateSlot({ slots: newSlots, day: selectedDay }));
    setName("");
    setNumber("");
    closeModal();
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="modal-style">
        <form onSubmit={handleSubmit} className="form-style">
          <div className="input-div-style">
            <p>Name</p>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter Your Name"
              value={name ? name : ""}
            ></input>
          </div>
          <div className="input-div-style">
            <p>Phone Number</p>
            <input
              onChange={(e) => setNumber(e.target.value)}
              type="text"
              placeholder="Enter Your Number"
              value={number ? number : ""}
            ></input>
          </div>
          <div>
            <input
              type="submit"
              className="submit-button"
              value="Submit"
            ></input>
          </div>
        </form>
        <FaTimes onClick={closeModal} className="close-modal" />
      </div>
    </Modal>
  );
};

export default BookingModal;
