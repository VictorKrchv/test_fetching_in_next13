import Link from "next/link";
import styles from "./page.module.css";

const getSomeDataWithoutFetch = async (): Promise<number> => {
  return Promise.resolve(Math.random());
};

export const revalidate = 10; // revalidate every 10 sec

export default async function Home() {
  const someData = await getSomeDataWithoutFetch();

  return (
    <main className={styles.main}>
      HERE SOME DATA - {someData}
      <Link href="/posts">Posts</Link>
    </main>
  );
}
