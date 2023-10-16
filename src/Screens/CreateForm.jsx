import React, { useState } from "react";
import "../Styles/CreateForm.scss";
import Modal from "@mui/material/Modal";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";

const STYLES = {
  MODAL: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

function CreateForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const InputComponent = ({ label, child }) => {
    return (
      <div className="inputHolder">
        <p>{label}</p>
        <div>{child}</div>
        {false && <small className="error">THIS IS ERROR</small>}
      </div>
    );
  };
  return (
    <>
      <div className="createForm">
        <h3>Create Text & Media</h3>
        <div className="formBody gridBody">
          <div className="grid-item item-1">
            <InputComponent
              label={"Heading 01"}
              child={
                <input placeholder="Add Heading that would make users interested" />
              }
            />
          </div>
          <div className="grid-item item-2">
            <InputComponent
              label={"Description 01"}
              child={
                <textarea placeholder="Add primary text to help user understand more about your products, servidces or offers." />
              }
            />
          </div>
          <div className="grid-item item-3">
            <InputComponent
              label={"Heading 02"}
              child={
                <input placeholder="Add heading that would make user interested" />
              }
            />
          </div>
          <div className="grid-item item-4">
            <InputComponent
              label={"Landscape Marketing Image(1:9:1)"}
              child={
                <input placeholder="Add your URL of the Image you want to use for the ad" />
              }
            />
          </div>
          <div className="grid-item item-5">
            <InputComponent
              label={"Portrait Marketing Image(4:5)"}
              child={
                <input placeholder="Add your URL of the Image you want to use for the ad" />
              }
            />
          </div>
          <div className="grid-item item-6">
            <InputComponent
              label={"Square Marketing Image(1:1)"}
              child={
                <input placeholder="Add your URL of the Image you want to use for the ad" />
              }
            />
          </div>
          <div className="grid-item item-7">
            <InputComponent
              label={"Video URL"}
              child={
                <input placeholder="Add your URL of the Video you want to use for the ad" />
              }
            />
          </div>
          <div className="grid-item item-8">
            <InputComponent
              label={"Business Name"}
              child={<input placeholder="Add your business name" />}
            />
          </div>
          <div className="grid-item item-9">
            <InputComponent
              label={"Button Label"}
              child={
                <input placeholder="Select a label that best suits your ad" />
              }
            />
          </div>
          <div className="grid-item item-10">
            <InputComponent
              label={"Website URL"}
              child={
                <input placeholder="Add the URL of the landing page you want to redirect users to" />
              }
            />
          </div>
        </div>
        <div className="actionBtnHolder">
          <button className="backBtn">Back</button>
          <button
            className="submitBtn"
            onClick={() => {
              setIsSubmitted(true);
              setTimeout(() => {
                setIsSubmitted(false);
                navigate("/");
              }, 2000);
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <Modal open={isSubmitted} style={STYLES.MODAL}>
        <div className="modal_container">
          <div>
            <CheckCircleIcon color="primary" fontSize="large" />
            <p>Submitted</p>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default CreateForm;
