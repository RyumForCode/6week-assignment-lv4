import axios from "axios";

const getPosts = async () => {
    const response = await axios.get('/posts', {baseURL : 'http://localhost:3001'});
    return response.data;
}

const addPosts = async (newPosts : {title : string, author : string, desc : string}) => {
    await axios.post('/posts', newPosts, {baseURL : 'http://localhost:3001'});
}

const removePosts = async (id : number) => {
    await axios.delete(`/posts/${id}`, {baseURL : 'http://localhost:3001'});
}

const editPosts = async (newPosts : {title : string, author : string, desc : string, id : number}) => {
    await axios.put(`/posts/${newPosts.id}`, newPosts, {baseURL : 'http://localhost:3001'});
}

export { getPosts, addPosts, removePosts, editPosts };