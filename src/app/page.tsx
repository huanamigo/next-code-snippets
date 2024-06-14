import { db } from '@/db';
import Link from 'next/link';

export default async function Home() {
  const snippets = await db.snippet.findMany();

  return (
    <div>
      <div className="flex justify-between items-center pb-4 pt-4">
        <h1>Snippets</h1>
        <Link className="border p-2 rounded" href={'/snippets/new'}>
          New snippet
        </Link>
      </div>

      <div className="flex flex-col gap-3">
        {snippets.map((snippet) => (
          <Link
            className="flex justify-between items-center p-2 border rounded"
            href={`/snippets/${snippet.id}`}
            key={snippet.id}
          >
            <div>{snippet.title}</div>
            <div>View</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
