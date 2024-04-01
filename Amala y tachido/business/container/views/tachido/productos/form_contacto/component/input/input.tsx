import styles from './styles.module.css'

interface InputProps {
    name: string;
    type: string;
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({name, type, value,placeholder, onChange}) => {
    return (
        <input
            className={styles.input}
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            required
        />
    );
};

export default Input;