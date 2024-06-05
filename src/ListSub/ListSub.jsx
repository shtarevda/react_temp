import { useState } from "react";
import { ListSubItem } from "./ListSubItem";
import "./ListSub.css";

export default function ListSub({ aSubs }) {
  const [openID, setID] = useState(null);
  return (
    <ul className="listSub">
      {aSubs.map((listItem, id) => {
        return (
          <ListSubItem
            onClick={() => (id === openID ? setID(null) : setID(id))}
            listItem={listItem}
            isOpen={id === openID}
            key={id}
          />
        );
      })}
    </ul>
  );
}
