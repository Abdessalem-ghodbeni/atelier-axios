import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { addEvent } from "../Services/Api";
import { useNavigate } from "react-router-dom";

function AddEvent() {
  const navigate = useNavigate();
  const [newEvent, setNewEvent] = useState({
    name: "",
    description: "",
    price: "",
    nbTickets: "",
    img: "",
    nbParticipants: "0",
    like: true,
  });
  const onvalueChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };
  const onFileChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.files[0].name });
  };
  const handleSumbit = async (e) => {
    e.preventDefault();
    const event = await addEvent(newEvent);
    if (event.status == 201) {
      navigate("/events");
    }
  };
  return (
    <>
      <form onSubmit={handleSumbit}>
        <div className="card p-3">
          <div className="mb-3  ">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              name="name"
              onChange={(e) => {
                onvalueChange(e);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              defaultValue={""}
              name="description"
              onChange={(e) => {
                onvalueChange(e);
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="enter price"
              name="price"
              onChange={(e) => {
                onvalueChange(e);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Number of tickets
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="abdessalem"
              name="nbTickets"
              onChange={(e) => {
                onvalueChange(e);
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Image
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              name="img"
              onChange={(e) => {
                onFileChange(e);
              }}
            />
          </div>
        </div>
        <div className="d-flex mt-3">
          <Button className="btn btn-primary me-3" type="submit">
            {" "}
            Add{" "}
          </Button>
          <Button className="btn btn-danger" type="button">
            {" "}
            Cancel{" "}
          </Button>
        </div>
      </form>
    </>
  );
}

export default AddEvent;
