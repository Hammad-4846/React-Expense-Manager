import React, { useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { ImBin2 } from "react-icons/im";
import EditModal from "./EditModal";

function DashboardItems({ data, handleConfirmModal, editExpenseInfo,owner }) {
  console.log("This is owener",owner)
  let hourDiff = "";
  if (data.updatedAt) {
    const updatedDate = new Date(data.updatedAt);
    const currentDate = new Date();

    let diff = (currentDate.getTime() - updatedDate.getTime()) / 1000;
    diff /= 60 * 60;
    hourDiff = Math.abs(Math.round(diff));
  }
  const [toggleEditModal, setToggleEditModal] = useState(false);
  return (
    <>
      {toggleEditModal && (
        <EditModal
          editExpenseInfo={editExpenseInfo}
          handleCloseModal={() => setToggleEditModal(false)}
          prevName={data.name}
          prevAmout={data.amount}
          prevCat={data.category}
          prevData={data.date.toString().slice(0, 15)}
          id={data.id}
          prevDesc={data.description}
          email = {owner.email}
        />
      )}
      <tr className="table__row">
        <td>{data.name}</td>
        <td>{data.category}</td>
        <td>{data.date.toString().slice(0, 15)}</td>
        <td>{data.amount}</td>
        <td>{data.updatedAt ? `${hourDiff} Hours Ago` : "Not Updated Yet"}</td>
        <td>{data.owner}</td>
        <td className="edit__options">
          <BsFillPencilFill onClick={() => setToggleEditModal(true)} />
          <ImBin2 onClick={() => handleConfirmModal(data.id)} />
        </td>
      </tr>
    </>
  );
}

export default DashboardItems;
