import styled from "styled-components";
import useInputRefFocus from "../hooks/useInputRefFocus";

const Composition = () => {

    const [titleRef, titleBoolean] = useInputRefFocus();
    const [authorRef, authorBoolean] = useInputRefFocus();
    const [descRef, descBoolean] = useInputRefFocus();

    return (
        <StCompositionContainer>
            <StLabelTitle focusControl = {titleBoolean} htmlFor = 'InputTitle'>Title</StLabelTitle>
            <StInputTitle placeholder = 'Insert the title. (Up to 50 characters)' ref = {titleRef} id = 'InputTitle'/>
            <StLabelAuthor focusControl = {authorBoolean} htmlFor = 'InputAuthor'>Author</StLabelAuthor>
            <StInputAuthor placeholder = 'Insert the author. (Up to 10 characters)' ref = {authorRef} id = 'InputAuthor'/>
            <StLabelDesc focusControl = {descBoolean} htmlFor = 'InputDesc'>Description</StLabelDesc>
            <StInputDesc placeholder = 'Insert the title. (At least 50 characters)' ref = {descRef} id = 'InputDesc'/>
            <StButtonDiv>
                <StButton buttonType = {1}>Cancel</StButton>
                <StButton buttonType = {0}>Publish</StButton>
            </StButtonDiv>
        </StCompositionContainer>
    );
};

export default Composition;

const StCompositionContainer = styled.div`
    display : flex;
    align-items: flex-start;
    flex-direction: column;
    height : 100%;
    padding : 1.5rem;
    flex-wrap : wrap;
    z-index : 1;

    animation: fadein 400ms;

    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`

const StLabelTitle = styled.label<{focusControl? : boolean}>`
    font-family : 'inter';
    font-size : 1.5rem;
    font-weight : 900;
    &:nth-of-type(n+2) {
        margin-top : 2rem;
    }
    color : ${({focusControl}) => focusControl ? '#0075C4' : 'black'};
    transition : 200ms;
`

const StLabelAuthor = styled.label<{focusControl? : boolean}>`
    font-family : 'inter';
    font-size : 1.5rem;
    font-weight : 900;
    &:nth-of-type(n+2) {
        margin-top : 2rem;
    }
    color : ${({focusControl}) => focusControl ? '#0075C4' : 'black'};
    transition : 200ms;
`

const StLabelDesc = styled.label<{focusControl? : boolean}>`
    font-family : 'inter';
    font-size : 1.5rem;
    font-weight : 900;
    &:nth-of-type(n+2) {
        margin-top : 2rem;
    }
    color : ${({focusControl}) => focusControl ? '#0075C4' : 'black'};
    transition : 200ms;
`

const StInputTitle = styled.input`
    transition : 100ms;
    margin-top : 1rem;
    width : 100%;
    height : 3rem;
    box-sizing: border-box;
    font-family : 'inter';
    font-size : 1rem;
    font-weight : 400;
    border : none;
    border-radius : 0.25rem;
    box-shadow : 0px 0px 1rem rgba(0, 0, 0, .15);
    padding-left : 1rem;
    &:focus {
        outline : none;
        outline: 2px solid #0075C4;
        outline-offset: -2px;
    }
    &::placeholder {
        color : rgba(0, 0, 0, .2);
    }
`

const StInputAuthor = styled.input`
    transition : 100ms;
    margin-top : 1rem;
    width : 100%;
    height : 3rem;
    box-sizing: border-box;
    font-family : 'inter';
    font-size : 1rem;
    font-weight : 400;
    border : none;
    border-radius : 0.25rem;
    box-shadow : 0px 0px 1rem rgba(0, 0, 0, .15);
    padding-left : 1rem;
    &:focus {
        outline : none;
        outline: 2px solid #0075C4;
        outline-offset: -2px;
    }
    &::placeholder {
        color : rgba(0, 0, 0, .2);
    }
`

const StInputDesc = styled.textarea`
    transition : 100ms;
    resize: none;
    margin-top : 1rem;
    width : 100%;
    height : 12rem;
    box-sizing: border-box;
    font-family : 'inter';
    font-size : 1rem;
    font-weight : 400;
    border : none;
    border-radius : 0.25rem;
    box-shadow : 0px 0px 1rem rgba(0, 0, 0, .15);
    padding : 1rem;
    &:focus {
        outline : none;
        outline: 2px solid #0075C4;
        outline-offset: -2px;
    }
    &::placeholder {
        color : rgba(0, 0, 0, .2);
    }
`

const StButtonDiv = styled.div`
    margin-top : 2rem;
    width : 100%;
    display : flex;
    justify-content: flex-end;
`

const StButton = styled.button<{buttonType? : number}>`
    width : 128px;
    height : 2rem;
    font-family : 'inter';
    font-size : 1rem;
    font-weight : 700;
    margin-left : 1rem;
    border : ${({buttonType}) => buttonType === 1 ? '2px solid #0075C4' : 'none'};
    border-radius : 0.25rem;
    background-color : ${({buttonType}) => buttonType === 1 ? 'white' : '#0075C4'};
    color : ${({buttonType}) => buttonType === 1 ? '#0075C4' : 'white'};
    transition : 100ms;
    &:hover {
        background-color : ${({buttonType}) => buttonType === 1 ? null : '#0284db'};
        border : ${({buttonType}) => buttonType === 1 ? '2px solid #0284db' : null};
        color : ${({buttonType}) => buttonType === 1 ? '#0284db' : null};
    }
`