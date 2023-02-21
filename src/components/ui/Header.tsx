import styled from 'styled-components'

const Header = () => {
    return (
        <StHeader>
            <StLogoBox>
                <StLogo>
                    The <br/>
                    Super <br/>
                    Posts.
                </StLogo>
            </StLogoBox>
        </StHeader>
    );
};

export default Header;

const StHeader = styled.div`
flex-shrink: 0;
    width : 100vw;
    height : 128px;
    display : flex;
    align-items: center;
    background-color : white;
    box-shadow : 0px 0px 1rem rgba(0, 0, 0, .15);
    z-index : 2;
`

const StLogoBox = styled.div`
    display : flex;
    margin-left : 1.5rem;
    background-color : #0075C4;
    width : 6rem;
    height : 6rem;
    border-radius : 0.25rem;
    box-shadow : 0px 0px 1rem rgba(0, 0, 0, .15);
`

const StLogo = styled.div`
    font-family : 'inter';
    font-weight : 900;
    font-size : 1.5rem;
    letter-spacing : -0.05rem;
    line-height : 1.5rem;
    color : white;
    margin : auto auto;
`