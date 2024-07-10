import { motion } from "framer-motion";
import styled from "styled-components";

const Button = (p) => {

    const { title, onClick, className, style, name } = p

    const hleClick = (e) => {
        onClick(e)
    }
    
    return (
        <Container className={className} style={style}>
            <motion.button
                name={name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={hleClick}
            >
                {title}
            </motion.button>            
        </Container>
     );
}
 
export default Button;

const Container = styled.div`

    button{
        cursor: pointer;
        width: 150px;
        height: 29px;
        transform: none;
        border-radius: 10px;
        border: none;
        background: var(--main-gradient);
        transform: none;
        color: white;
        font-size: 1.3rem;
    }
`