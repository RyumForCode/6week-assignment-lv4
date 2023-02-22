import { useEffect, useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { editPosts, getPosts, removePosts } from "../api/posts";

const PostsDetail = () => {

    const [editable, setEditable] = useState(false);
    const [editField, setEditField] = useState('');
    const editRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {editRef.current?.focus()}, [editable]);

    const { isLoading, isError, data } = useQuery('posts', getPosts);
    const params = useParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const mutation = useMutation(editPosts, {
        onSuccess : () => {
            queryClient.invalidateQueries('posts');
        }
    })

    if (isLoading) return <div>loading</div>;
    if (isError) return <div>Error</div>;

    const currentData = data.find((val : {title : string, author : string, desc : string, id : number}) => val.id === Number(params.id))

    const removeHandler = () => {
        const removeConfirm = window.confirm('Are you sure to remove this post?');
        if (removeConfirm === true) {
            removePosts(currentData.id);
            navigate('/');
        }
    }

    const editHandler = (desc : string) => {
        setEditable(!editable);
        mutation.mutate({title : currentData.title, author : currentData.author, desc, id : currentData.id});
    }

    return (
        <StPostsDetailContainer>
            <StContentsBox>
                <StContentsDiv>
                    <StTitleContents>{currentData.title}</StTitleContents>
                    <StAuthorContents>{currentData.author}</StAuthorContents>
                    {editable === false ? <StDescContents>{currentData.desc}</StDescContents> : <StEditInput value = {editField} onChange = {(e) => {setEditField(e.target.value)}} ref = {editRef} />}
                </StContentsDiv>
                <StButtonBunch>
                    {editable === false ? <StEditButton onClick = {() => {setEditable(!editable); setEditField(currentData.desc);}}>Edit</StEditButton> : <StEditButton onClick = {() => {editHandler(editField)}}>Done</StEditButton>}
                    <StRemoveButton onClick = {() => removeHandler()}>Remove</StRemoveButton>
                </StButtonBunch>
            </StContentsBox>
        </StPostsDetailContainer>
    );
}

export default PostsDetail;

const StPostsDetailContainer = styled.div`
    display : flex;
    align-items: flex-start;
    height : 100%;
    overflow : scroll;
    flex-wrap : wrap;
    justify-content : center;
    z-index : 1;
    background-color : #d4eeff;

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

const StContentsBox = styled.div`
    height : 100%;
    width : 50%;
    background-color : white;
    padding : 1.5rem;
    box-sizing: border-box;
    box-shadow : 0px 0px 1rem rgba(0, 0, 0, .15);
    height : 100%;
    overflow : scroll;
    display : flex;
    justify-content : space-between;
    flex-direction : column;
`

const StContentsDiv = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
`

const StTitleContents = styled.div`
    margin-top : 0.5rem;
    font-family : 'inter';
    font-size : 1.5rem;
    font-weight : 900;
    color : #0075C4;
    width : 100%;
    box-sizing: border-box;
    word-break : break-word;
`

const StAuthorContents = styled.div`
    margin-top : 1rem;
    font-family : 'inter';
    font-size : 1rem;
    font-weight : 700;
    color : rgb(128,128,128);
    width : 100%;
    box-sizing: border-box;
    word-break : break-word;
`

const StDescContents = styled.div`
    margin-top : 1.5rem;
    font-family : 'inter';
    font-size : 1rem;
    font-weight : 400;
    line-height : 1.5rem;
    color : black;
    width : 100%;
    box-sizing: border-box;
    word-break : break-word;
`

const StButtonBunch = styled.div`
    margin-top : 1.5rem;
    width : 100%;
    display : flex;
    gap : 1rem;
    justify-content : flex-end;
`

const StEditButton = styled.button`
    width : 128px;
    height : 2rem;
    font-family : 'inter';
    font-size : 1rem;
    font-weight : 700;
    border : none;
    border-radius : 0.25rem;
    background-color : #0075C4;
    color : white;
    transition : 100ms;
    &:hover {
        background-color : #0284db;
    }
`

const StRemoveButton = styled.button`
    width : 128px;
    height : 2rem;
    font-family : 'inter';
    font-size : 1rem;
    font-weight : 700;
    border : none;
    border-radius : 0.25rem;
    background-color : #ff3b30;
    color : white;
    transition : 100ms;
    &:hover {
        background-color : #ff756e;
    }
`

const StEditInput = styled.textarea`
    transition : 100ms;
    resize: none;
    margin-top : 1rem;
    width : 100%;
    height : 24rem;
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