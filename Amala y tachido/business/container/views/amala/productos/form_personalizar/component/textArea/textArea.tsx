import styles from './styles.module.css'

interface TextAreaProps {
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({name, value, onChange}) => {
    return (

        <textarea
            className={styles.textArea}
            name={name}
            value={value}
            onChange={onChange}
        />

    );
};

export default TextArea;