const handleFocus = (e) => {
  e.target.parentNode.firstElementChild.classList.add("label-move-up");
};

const handleBlur = (e) => {
  if (!e.target.value) {
    e.target.parentNode.firstElementChild.classList.remove("label-move-up");
  }
};

export { handleFocus, handleBlur };
