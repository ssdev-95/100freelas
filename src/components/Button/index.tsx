import styles from '../../styles/components/Button.module.css'

interface ButtonProps {
    bg: string;
    src: string;
    title: string;
}

export const Button = ({bg, src, title}: ButtonProps) => {
    return (
        <div style={{backgroundColor: bg}} className={styles.button}>
            <img src={src}/>
            <p>{title}</p>
        </div>
    )
}