import { deleteSnippet } from '@/actions/actions';
import ReadOnlyEditor from '@/components/readonly-editor';
import { db } from '@/db';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

const SnippetShowPage = async (props: SnippetShowPageProps) => {
  const snippet = await db.snippet.findFirst({
    where: { id: Number(props.params.id) },
  });

  if (!snippet) {
    return notFound();
  }

  const deleteSnippetAction = deleteSnippet.bind(null, snippet.id);

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="p-2 border rounded"
          >
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button className="p-2 border rounded" type="submit">
              Delete
            </button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded ">
        {/* <code>{snippet.code}</code> */}
        <ReadOnlyEditor snippet={snippet} />
      </pre>
    </div>
  );
};

export default SnippetShowPage;

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();

  return snippets.map((snippet) => {
    return {
      id: String(snippet.id),
    };
  });
}
