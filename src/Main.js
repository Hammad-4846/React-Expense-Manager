import React, { useEffect, useState } from "react";
import CreateModal from "./Components/CreateModal";
import Dashboard from "./Components/Dashboard";
import { nanoid } from "nanoid";
import ConfirmModal from "./Components/ConfirmModal";
import { useLocation, useNavigate } from "react-router-dom";

function Main() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem("react-expense-manager")) || []
  );
  const [filterExpense, setFilterExpense] = useState(expenses);
  const [filterDate, setFilterDate] = useState("");
  const [toggleModal, setToggleModal] = useState(false);
  const [toggleConfirmModal, setToggleConfirmModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [searchValue, setSerchValue] = useState("");
  const [loginUserDetail, setLoginUserDetail] = useState({});
  useEffect(() => {
    localStorage.setItem("react-expense-manager", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    setLoginUserDetail(state);
  }, []);

  const handleCreateExpense = (expense) => {
    const newExpense = {
      id: nanoid(),
      name: expense.name,
      category: expense.category,
      date: expense.date,
      description: expense.description,
      amount: expense.amount,
      updated: "Not Updated Yet",
      owner: loginUserDetail.owner ? "me" : loginUserDetail.email,
    };
    const newExpenses = [...expenses, newExpense];
    setExpenses(newExpenses);
  };

  const handleCloseModal = () => {
    setToggleModal(false);
  };

  const handleOpenCreateModal = () => {
    setToggleModal(true);
  };

  const handleDeleteExpense = (id) => {
    const newExpense = expenses.filter((expense) => expense.id !== id);
    setExpenses(newExpense);
  };

  const handleConfirmModal = (id) => {
    setDeleteId(id);
    setToggleConfirmModal(true);
  };

  const handleSearch = (searchName) => {
    setSerchValue(searchName);
  };

  const handleEditExpense = (data) => {
    data.updatedAt = new Date();
    const index = expenses.findIndex((expense) => expense.id === data.id);
    const updatedExpense = [...expenses];
    updatedExpense[index] = data;
    setExpenses(updatedExpense);
  };

  const handleDate = (data) => {
    const rightFormat = data.slice(0, 15);
    setFilterDate(rightFormat);
    const filteredExpenses = expenses.filter(
      (expense) => expense.date.slice(0, 15) === rightFormat
    );
    setFilterExpense(filteredExpenses);
  };

  return (
    <div>
      <button onClick={() => navigate("/")} className="add__button switch-btn">
        Switch User
      </button>
      <Dashboard
        expenses={
          filterDate
            ? filterExpense
            : expenses.filter((expense) =>
                expense.name
                  .toLowerCase()
                  .includes(searchValue.toLocaleLowerCase())
              )
        }
        handleDate={handleDate}
        OpenCreateModal={handleOpenCreateModal}
        handleConfirmModal={handleConfirmModal}
        handleEditExpense={handleEditExpense}
        handleSearch={handleSearch}
        owner={loginUserDetail}
      />
      {toggleModal && (
        <CreateModal
          handleCreateExpense={handleCreateExpense}
          handleCloseModal={handleCloseModal}
        />
      )}
      {toggleConfirmModal && (
        <ConfirmModal
          deleteId={deleteId}
          deleteExpense={handleDeleteExpense}
          closeConfirmModal={() => setToggleConfirmModal(false)}
        />
      )}
    </div>
  );
}

export default Main;
