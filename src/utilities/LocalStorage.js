const getFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("CartId")) || [];
};
const addToLocalStorage = (id) => {
  const items = getFromLocalStorage();
  if (items.includes(id)) {
    ("");
  } else {
    items.push(id);
    localStorage.setItem("CartId", JSON.stringify(items));
  }
};
const deleteFromLocalStorage = (id) => {
  const ids = getFromLocalStorage();
  const newIds = ids.filter((item) => item !== id);
  localStorage.setItem("CartId", JSON.stringify(newIds));
};

export { getFromLocalStorage, addToLocalStorage, deleteFromLocalStorage };
