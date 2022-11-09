
import styles from './styles/InputField.module.css'

export const InputField = ({label, type, inputName, value, onChange, error}) => {

    return (
        <div className={styles['form-group']}>
            <input 
                type={type} 
                name={inputName} 
                className={styles['form-input']} 
                value={value} 
                onChange={onChange} />
            <label 
                htmlFor={inputName} 
                className={`
                    ${styles['form-label']}
                    ${ (value.length > 0) ? styles['active'] : styles['no-active'] }
                `}>{label}</label>
            <span className='text-red-400 text-sm'>{error}</span>
        </div>
    )
}
