import SnippetEditForm from '@/app/components/snippet-edit-form';
import { db } from '@/db';
import { notFound } from 'next/navigation';

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

const SnippetEditPage = async (props: SnippetEditPageProps) => {
  const id = Number(props.params.id);
  const snippet = await db.snippet.findFirst({
    where: { id: id },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <p>Editing snippet with title {snippet.title}</p>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
};

export default SnippetEditPage;
