import React, { useState } from "react";
import "./Home.css";
import { store } from "../../app/store";
import BookingModal from "./BookingModal";
import { MdCall } from "react-icons/md";
import { days } from "./importantVars";
const Home = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedDay, setSelectedDay] = useState("monday");
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const slots = store.getState().slot;
  // console.log(selectedDay);
  const handleSlot = (id) => {
    setSelectedSlot(id);
    openModal();
  };
  return (
    <div className="home-page-style">
      <div className="div-main">
        <h3 className="head">Please Book a Slot</h3>
        <div className="slot-div">
          {days.map((day, i) => (
            <div
               onClick={() => setSelectedDay(day)}
              className={
                day === selectedDay ? "day-style-selected" : "day-style"
              }
              key={i}
            >
              {day.toUpperCase()}
            </div>
          ))}
        </div>
        <div className="slot-div">
          {slots[selectedDay].map((slot) => (
            <div
              onClick={() => handleSlot(slot.id)}
              className={
                slot.information.name ? "slot-style-booked" : "slot-style"
              }
              key={slot.id}
            >
              {slot.information.name }
              {slot.time}
            </div>
          ))}
        </div>
      </div>
     <div >
     <BookingModal
        selectedSlot={selectedSlot}
        closeModal={closeModal}
        openModal={openModal}
        modalIsOpen={modalIsOpen}
        selectedDay={selectedDay}
      ></BookingModal>
     </div>
    </div>
  );
};

export default Home;
