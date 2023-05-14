import { Suspense } from "react";
import { getPostList } from "../../api/post";

export default function AsyncLoading({
  data,
}: {
  data: Array<{
    userId: number;
    id: number;
    title: string;
    body: string;
  }>;
}) {
  console.log("data", data);
  return (
    <>
      <h1>Server Component Async Fetching1</h1>
      <div className="flex flex-col gap-4 w-full h-full">
        <ul>
          {data.map(({ userId, id, title, body }) => {
            return (
              <li key={id}>
                <div>{userId}</div>
                <div>{title}</div>
                <div>{body}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const data = await getPostList(3000);

  // Pass data to the page via props
  return { props: { data } };
}
