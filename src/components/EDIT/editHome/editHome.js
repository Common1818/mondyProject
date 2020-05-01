import React, { useContext } from "react";
import "./css/editHome.css";
import EditHomeVideo from "./editHomeVideo";
import EditUspSlide from "./editUspSlide";
import EditJoinSlide from "./editJoinSlide";
import { HomeContext } from "../../../contexts/homeContext";
import { AuthContext } from "../../../contexts/authContext";

const EditHome = () => {
  const { content } = useContext(HomeContext);
  const { isAdmin } = useContext(AuthContext);

  // if (isAdmin) return <Redirect to="/" />;
  return (
    <div>
      {isAdmin ? (
        <div className="edit-container">
          <hr />
          <div>
            <EditHomeVideo content={content.content} />
          </div>
          <br />
          <div>
            <EditUspSlide content={content.content} />
          </div>
          <br />
          <div>
            <EditJoinSlide content={content.content} />
          </div>
          <br />
        </div>
      ) : null}
    </div>
  );
};

export default EditHome;
