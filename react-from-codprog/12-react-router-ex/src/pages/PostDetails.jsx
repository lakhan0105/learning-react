import { useLoaderData } from "react-router-dom";

export async function fetchPost({ params }) {
  const postEndPoint = `https://jsonplaceholder.typicode.com/posts`;
  const resp = await fetch(`${postEndPoint}/${params.id}`);
  const respData = await resp.json();
  return respData;
}

function PostDetails() {
  const post = useLoaderData();

  return (
    <>
      {post && (
        <div>
          <h1>post id: {post.id}</h1>
          <h4>Title: {post.title}</h4>
        </div>
      )}
    </>
  );
}

export default PostDetails;
