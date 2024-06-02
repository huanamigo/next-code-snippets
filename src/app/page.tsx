import { db } from '@/db';
import Link from 'next/link';

export default async function Home() {
  const snippets = await db.snippet.findMany();

  return (
    <div>
      <Link href={'/snippets/new'}>New snippet</Link>

      {snippets.map((snippet) => (
        <div key={snippet.id}>
          <p>{snippet.id}</p>
          <p>{snippet.title}</p>
        </div>
      ))}
    </div>
  );
}
