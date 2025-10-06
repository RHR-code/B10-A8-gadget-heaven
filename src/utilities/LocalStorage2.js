const getFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("WsId")) || [];
};
const addToLocalStorage = (id) => {
  console.log(id);

  const items = getFromLocalStorage();
  if (items.includes(id)) {
    ("");
  } else {
    items.push(id);
    localStorage.setItem("WsId", JSON.stringify(items));
  }
};
const deleteFromLocalStorage = (id) => {
  const ids = getFromLocalStorage();
  const newIds = ids.filter((item) => item !== id);
  localStorage.setItem("WsId", JSON.stringify(newIds));
};

export { getFromLocalStorage, addToLocalStorage, deleteFromLocalStorage };
