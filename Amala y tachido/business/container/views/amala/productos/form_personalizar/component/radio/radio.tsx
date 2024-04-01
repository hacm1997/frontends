import styles from './styles.module.css'

interface RadioProps {
  id: any
  name: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  checked?: boolean
  type: string
  disable: boolean
}

const Radio: React.FC<RadioProps> = ({ id, name, value, label, type, checked, disable, onChange }) => {
  return (
    <div className={styles.radio}>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
        disabled={disable}
      />
      <label>{label}</label>
    </div>
  );
};

export default Radio;
