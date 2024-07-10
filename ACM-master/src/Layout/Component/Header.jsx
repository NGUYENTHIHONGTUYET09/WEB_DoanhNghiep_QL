import styled from "styled-components";
import { Icon } from "../../Assets/icon";

const Header = (p) => {
    const { toggleSideBar } = p

    return ( 
        <Container>
            <div className="header">
                <div className="icon-wrapper" onClick={toggleSideBar(true)}>
                    <Icon.menu />
                </div>
            </div>
        </Container> 
     );
}
 
export default Header;

const Container = styled.div`

    height: var(--header-ht);
    width: 100vw;
    .header {
        display: flex;
        justify-content: space-between;
        padding: 0.8rem 2.3rem;
        .icon-wrapper {
            display: flex;
            padding: 0.5rem;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            svg{
                font-size: 20px
            }
        }
    }
`

