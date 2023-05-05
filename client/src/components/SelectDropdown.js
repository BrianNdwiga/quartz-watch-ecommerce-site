import styles from "@/styles/Dropdown.module.css";
import { useRef, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const SelectDropdown = ({ label, options }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const buttonRef = useRef([]);
  const buttonTextRef = useRef(null);

  const handleSelectToggle = () => {
    const selectBtn = document.querySelector("#select_btn"),
      items = document.querySelectorAll("#item");

    // show the dropdown
    if (selectBtn) {
      selectBtn.classList.toggle(styles.open);
    }
    // change select innertext and show checked
    if (items) {
      items.forEach((item) => {
        const spanElement = item.querySelector("#item_text");
        item.addEventListener("click", () => {
          item.classList.toggle(styles.checked);

          const btnText = buttonTextRef.current;

          btnText.innerText = spanElement.textContent;

          setSelectedLanguage(spanElement.textContent);
        });
      });
    }
    console.log(options);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.select_btn}
        id="select_btn"
        onClick={handleSelectToggle}
      >
        <span className={styles.btn_text} ref={buttonTextRef}>
          {label}
        </span>
        <span className={styles.arrow_dwn}>
          <KeyboardArrowDownIcon />
        </span>
      </div>

      <ul className={styles.list_items}>
        {options.map((option, index) => (
          <li className={styles.item} id="item" key={index} ref={buttonRef}>
            <div style={{ width: "45px",paddingRight:"10px" }}>
              <span className={styles.item_text} id={option}>
                {option}
              </span>
            </div>
              <CheckIcon style={{ marginLeft: "70%" }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectDropdown;
