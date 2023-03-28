import React from "react";
import DashboardItems from "./DashboardItems";

function Dashboard({
  expenses,
  OpenCreateModal,
  handleConfirmModal,
  handleEditExpense,
  handleSearch,
  handleDate,
  owner,
}) {
  return (
    <div className="Dashboard">
      <div className="Dashboard__top-bar">
        <h2>My Expense Manager</h2>
        <div className="top__bar-options">
          <input type="date" onChange={(e) => handleDate(e.target.value)} />
          <input
            onChange={(e) => handleSearch(e.target.value)}
            type="text"
            placeholder="Search By Name"
          />
          <button className="add__button" onClick={OpenCreateModal}>
            +New Expense
          </button>
        </div>
      </div>
      <article>
        <table className="Dashboard__table responsive">
          <thead className="tabel__head">
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Date of Expense</th>
              <th>Amount</th>
              <th>Updated At</th>
              <th>Created by</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table___body">
            {expenses.map((data) => (
              <DashboardItems
                editExpenseInfo={handleEditExpense}
                data={data}
                OpenCreateModal={OpenCreateModal}
                handleEditExpense={handleEditExpense}
                handleConfirmModal={handleConfirmModal}
                owner = {owner}
              />
            ))}
          </tbody>
        </table>
      </article>
    </div>
  );
}

export default Dashboard;
