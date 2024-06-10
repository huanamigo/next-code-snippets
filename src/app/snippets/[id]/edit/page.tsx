interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

const SnippetEditPage = (props: SnippetEditPageProps) => {
  const id = Number(props.params.id);
  return (
    <div>
      <p>Editing snippet number {id}</p>
    </div>
  );
};

export default SnippetEditPage;
