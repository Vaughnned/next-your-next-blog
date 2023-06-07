import { useRouter } from "next/router";

export default function getBlog() {
  const router = useRouter();
  console.log(router);

  return <h1>{router.query.postId}</h1>;
}
