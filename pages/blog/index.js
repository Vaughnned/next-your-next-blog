import Link from "next/link";
import data from "blogContent.json";
import { useRouter } from "next/router";

export default function blogList() {
  const router = useRouter();
  console.log(router);

  return (
    <>
      {data.map((blog, index) => {
        return (
          <div key={index}>
            <Link href={`/blog/${blog.id}`}>
              <h1>{blog.title}</h1>
            </Link>
          </div>
        );
      })}
    </>
  );
}
