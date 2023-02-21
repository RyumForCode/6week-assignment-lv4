import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AddPostsBox = () => {

    const navigate = useNavigate();

    return (
        <StPostsContainer onClick = {() => {navigate(`/composition-doc`)}}>
            <StAddPosts>
                ADD POSTS <br/>
                +
            </StAddPosts>
        </StPostsContainer>
    );
};

export default AddPostsBox;

const StPostsContainer = styled.div`
    display : flex;
    align-items: center;
    justify-content: center;
    width : 18%;
    height : 340px;
    background-color : #0075C4;
    border-radius : 0.25rem;
    box-shadow : 0px 0px 1rem rgba(0, 0, 0, .15);
    transition : 100ms;
    &:hover {
        background-color : #0284db;
    }
`

const StAddPosts = styled.div`
    text-align: center;
    font-family : 'inter';
    font-size : 2rem;
    font-weight : 900;
    color : white;
`