import React, { useState } from "react";

function EditModal({
  prevName,
  prevCat,
  prevDesc,
  prevData,
  prevAmout,
  handleCloseModal,
  editExpenseInfo,
  id,
  email,
}) {
  const [name, setName] = useState(prevName);
  const [category, setCategory] = useState(prevCat);
  const [description, setDescription] = useState(prevDesc);
  const [date, setDate] = useState(prevData);
  const [amount, setAmount] = useState(prevAmout);

  const handleSubmitExpense = () => {
    editExpenseInfo({
      name,
      category,
      description,
      date,
      amount,
      owner: email,
      id,
    });
    handleCloseModal();
  };

  const handleSetAmount = (event) => {
    if (!event.target.value.startsWith("-")) {
      setAmount(event.target.value);
    }
  };

  return (
    <div className="CreateModal__ParentDiv">
      <article className="CreateModal">
        <h3>Edit Expense</h3>
        <div className="input__fields">
          <div className="name__field">
            <label htmlFor="name">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              placeholder="Name The Expense"
            />
          </div>

          <div className="description__field">
            <label htmlFor="desc">Description</label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              id="desc"
              placeholder="Name The Expense"
            />
          </div>

          <div className="category__field">
            <label htmlFor="category">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Books">Books</option>
              <option value="Health">Health</option>
              <option value="Electronics">Electronics</option>
              <option value="Travel">Travel</option>
              <option value="Education">Education</option>
            </select>
          </div>

          <div className="date__field">
            <label htmlFor="date">Date Of Expense</label>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              id="date"
              type="date"
            />
          </div>

          <div className="exp__field">
            <label htmlFor="exp">Expense Amount</label>
            <input
              value={amount}
              onChange={handleSetAmount}
              placeholder="Expense Amount in INR"
              id="exp"
              type="number"
              min={0}
            />
          </div>
        </div>

        <div className="create__modal-options">
          <button className="btn" onClick={handleCloseModal}>
            Cencel
          </button>
          <button className="add__button" onClick={handleSubmitExpense}>
            Edit Expense
          </button>
        </div>
      </article>
    </div>
  );
}

export default EditModal;
