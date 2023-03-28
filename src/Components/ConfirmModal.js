import React from "react";

function ConfirmModal({ deleteId, deleteExpense, closeConfirmModal }) {
  const handleDeletItem = () => {
    deleteExpense(deleteId);
    closeConfirmModal();
  };
  return (
    <div className="ConfirmModal">
      <div className="ConfirmModal__Description">
        <h4>Are You Sure ? You Want to Delete This Item ?</h4>
      </div>
      <div className="ConfirmModal__Options">
        <button className="btn btn__cen" onClick={closeConfirmModal}>
          No
        </button>
        <button className="btn btn__conf" onClick={handleDeletItem}>
          Yes
        </button>
      </div>
    </div>
  );
}

export default ConfirmModal;
