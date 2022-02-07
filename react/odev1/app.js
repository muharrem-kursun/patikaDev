import axios from "axios";
 const getData = async(userId)=>{

    if(isNaN(userId))
    {
        return "userId is not number";
    }
    const user = await axios('https://jsonplaceholder.typicode.com/users/'+userId).then((data)=>data);
    const post = await axios('https://jsonplaceholder.typicode.com/posts?userId='+userId).then((data)=>data);


    return {"user":user.data,"posts":post.data};
}
export default getData;
