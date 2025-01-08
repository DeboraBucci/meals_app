import { MaterialIcons } from "@expo/vector-icons";

const CheckBox = ({ isChecked = false }) => {
  return (
    <MaterialIcons
      name={isChecked ? "check-box" : "check-box-outline-blank"}
      size={18}
      color={isChecked ? "#e67206" : "#333333"}
    />
  );
};

export default CheckBox;
