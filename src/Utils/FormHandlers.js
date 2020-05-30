const handleFocus = (e) => {
  e.target.parentNode.firstChild.classList.add("label-move-up");
};

const handleBlur = (e) => {
  if (!e.target.value) {
    e.target.parentNode.firstChild.classList.remove("label-move-up");
  }
};

export { handleFocus, handleBlur };
