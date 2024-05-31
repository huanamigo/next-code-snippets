import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <p>Home page</p>
      <Link href={'/snippets/new'}>New snippet</Link>
    </div>
  );
}
