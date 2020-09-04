import { useRef, useState, useEffect } from "react";

const useOnOutsideClick = () => {
  // State to determine if the drop down should be shown or not
  const [showDropDown, setShowDropDown] = useState(false);
  // Reference to the button triggering the drop down
  const ref = useRef(null);

  /*
	If the trigger btn ref exists and it's not the one clicked
	i.e any other part of the browser, hide drop down
	*/
  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setShowDropDown(false);
    }
  };

  useEffect(() => {
    /* Hide any drop down when the parent component mounts or un-mounts */
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return { ref, showDropDown, setShowDropDown };
};

export default useOnOutsideClick;
