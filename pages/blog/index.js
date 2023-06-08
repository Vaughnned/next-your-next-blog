import Link from "next/link";
import data from "blogContent.json";

export default function blogList() {
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
