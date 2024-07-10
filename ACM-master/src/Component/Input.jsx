import styled from "styled-components";

const Input = (p) => {
    const { width } = p

    return ( 
        <Container style={{width : width}}>
            <input type="text" />
        </Container>
     );
}
 
export default Input;

const Container = styled.div`

    width: 100%;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;

    input {
        border-radius: 5px;
        border: none;
        outline: none;
        width: 100%;
        padding: .7rem;
        height: 100%;
        font-size: 1.5rem;
        transition: all 0.3s ease-in-out;
        color: #626262;

        &:focus {
            border: 1px solid rgba(0, 0, 0, 0.2)!important;
            box-shadow: 0 3px 10px 0 rgba(0,0,0,.15);
        }
    }
`