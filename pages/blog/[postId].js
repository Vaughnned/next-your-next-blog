import { useRouter } from "next/router";
import data from "blogContent.json";
import Link from "next/link";

export default function GetBlog() {
  const router = useRouter();
  const blogNumber = data[router.query.postId - 1];

  return (
    <div>
      <Link href={`/blog/`}>
        <h1>{blogNumber?.title}</h1>
      </Link>
      <p>{blogNumber?.body}</p>
    </div>
  );
}
