import axios from "axios";

export default async function Blogs({
  params,
}: {
  params: { postId: number };
}) {
  const postId = (await params).postId;

  const blogs = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  // console.log(blogs);

  return (
    <>
      <h1>{blogs?.data.title}</h1>
      <br />
      <h2>{blogs?.data.body}</h2>
      {/* Blog Posts {postId} */}
    </>
  );
}
