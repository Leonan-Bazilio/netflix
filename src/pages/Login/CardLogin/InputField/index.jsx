import styles from "./styles.module.css";
export default function InputField({
  isFocused,
  error,
  value,
  onChange,
  onFocus,
  onBlur,
  nameAndId,
  label,
  type,
}) {
  return (
    <div className={isFocused ? styles.focused : ""}>
      <div className={`${styles.divFild} ${error ? styles.errorInput : ""}`}>
        <input
          className={styles.inputText}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          name={nameAndId}
          id={nameAndId}
          type={type}
        />
        <label htmlFor={nameAndId}>{label}</label>
      </div>
    </div>
  );
}
