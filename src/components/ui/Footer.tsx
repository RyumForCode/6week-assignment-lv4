import styled from 'styled-components'

const Footer = () => {
    return (
        <StFooter>
            <StFooterContents>
                © 2021. Hwang Jisang all rights reserved.
            </StFooterContents>
        </StFooter>
    );
};

export default Footer;

const StFooter = styled.div`
    flex-shrink : 0;
    width : 100vw;
    height : 64px;
    display : flex;
    align-items: center;
    background-color : #0075C4;
    box-shadow : 0px 0px 1rem rgba(0, 0, 0, .15);
    z-index : 2;
`

const StFooterContents = styled.div`
    font-family : 'inter';
    font-size : 1rem;
    font-weight : 400;
    color : white;
    margin-left : 1.5rem;
`