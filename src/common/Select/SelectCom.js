import Select from "react-select";
import style from "./SelectCom.module.css";
const SelectCom = ({ title, options, onChange, value, defaultValue }) => {
  return (
    <div className={style.select}>
      <span>{title}</span>
      <Select
        className={style.selected}
        options={options}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: "#ced4da",
            primary50: "#ced4da",
            primary: "#1D232F",
          },
        })}
      />
    </div>
  );
};

export default SelectCom;
