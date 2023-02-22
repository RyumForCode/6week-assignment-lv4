import axios from "axios";

const customBaseURL = 'https://json-server-vercel-gold-mu.vercel.app'

const getPosts = async () => {
    const response = await axios.get('/posts', {baseURL : customBaseURL});
    return response.data;
}

const addPosts = async (newPosts : {title : string, author : string, desc : string}) => {
    await axios.post('/posts', newPosts, {baseURL : customBaseURL});
}

const removePosts = async (id : number) => {
    await axios.delete(`/posts/${id}`, {baseURL : customBaseURL});
}

const editPosts = async (newPosts : {title : string, author : string, desc : string, id : number}) => {
    await axios.put(`/posts/${newPosts.id}`, newPosts, {baseURL : customBaseURL});
}

export { getPosts, addPosts, removePosts, editPosts };