import styled from "@emotion/styled"

const Nav= styled.nav`
    background-color: black;
    min-width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Ul = styled.ul `
    list-style: none;
    color: white;
    padding-right: 2rem;
    li {
        float: left;
        margin-left: 1rem;
    }
`
const Logo = styled.h3 `
    color: white;
    padding-left: 2rem;
    font-weight: 500;
`

const Navbar = () => {
    return(
        <Nav>
            <div>
                <Logo>
                    Logo
                </Logo>
            </div>
            <Ul>
                <li>Carta</li>
                <li>Eventos</li>
                <li>Reservas</li>
            </Ul>
        </Nav>
    )
}

export default Navbar