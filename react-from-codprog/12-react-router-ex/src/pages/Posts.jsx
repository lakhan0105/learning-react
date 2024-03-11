import { Link, useLoaderData } from "react-router-dom";

export async function fetchPosts() {
  const postsEndPoint = "https://jsonplaceholder.typicode.com/posts";
  const resp = await fetch(postsEndPoint);
  const respData = await resp.json();
  return respData;
}

function Posts() {
  const posts = useLoaderData();

  return (
    <>
      {posts &&
        posts.map((post) => {
          return (
            <div className="post" key={post.id}>
              <h4>{post.id}</h4>
              <p>{post.title}</p>
              <Link to={post.id.toString()}>details</Link>
            </div>
          );
        })}
    </>
  );
}

export default Posts;
