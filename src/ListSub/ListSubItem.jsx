import React, { useRef, useState } from "react";
import ArrowIcon from "./arrow.svg?react";
/* import { ReactComponent as ArrowIcon } from "./arrow.svg"; */

export const ListSubItem = ({ listItem, onClick, isOpen }) => {
  const itemRef = useRef(null);
  const [open, setOpen] = useState(false);
  if (!open && isOpen) setOpen(true);
  return (
    <li className="listSub-item">
      <button className="listSub-header" onClick={() => onClick()}>
        <div className="listSub-header-left">
          <div>{listItem.code}</div>
          <div>{listItem.name}</div>
        </div>
        <div className="listSub-header-right">
          <div className={open ? "indicator_green" : "indicator_red"}></div>
          <ArrowIcon
            className={`listSub-arrow ${isOpen ? "active" : ""}`}
            width="30px"
            height="30px"
          />
        </div>
      </button>
      <div
        className="listSub-collapse"
        style={
          isOpen ? { height: itemRef.current.scrollHeight } : { height: "0px" }
        }
      >
        <div className="listSub-body" ref={itemRef}>
          <ul className="listPos">
            {listItem.listOfPositions.map((posItem) => {
              return (
                <li key={posItem.id} className="listPos-item">
                  <div className="listSub-header-left">
                    <div className="listSub-name">{posItem.name}</div>
                    <div>{posItem.collaboratorFullname}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </li>
  );
};
