import { useState, useEffect } from "react";
import { getPostList } from "../../api/post";

const fetchPostList = getPostList(2000);

const PostList = () => {
  const [data, setData] = useState<
    Array<{
      userId: number;
      id: number;
      title: string;
      body: string;
    }>
  >();

  useEffect(() => {
    const getPosts = async () => {
      const posts = await getPostList(2000);
      setData(posts);
    };
    getPosts();
  }, []);

  return (
    <ul>
      {data?.map(({ userId, id, title, body }) => {
        return (
          <li key={id}>
            <div>{userId}</div>
            <div>{title}</div>
            <div>{body}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default function AsyncLoading() {
  return (
    <>
      <h1>Client Component Async Fetching1</h1>
      <div className="flex flex-col gap-4 w-full h-full">
        <PostList />
      </div>
    </>
  );
}
