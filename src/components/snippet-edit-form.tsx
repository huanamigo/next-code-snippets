'use client';

import { editSnippet } from '@/actions/actions';
import { Editor } from '@monaco-editor/react';
import { Snippet } from '@prisma/client';
import { startTransition, useState } from 'react';

interface SnippetEditFormProps {
  snippet: Snippet;
}

const SnippetEditForm = ({ snippet }: SnippetEditFormProps) => {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = '') => {
    setCode(value);
  };

  const editSnippetAction = (id: number, code: string) => {
    startTransition(async () => {
      await editSnippet(id, code);
    });
  };

  return (
    <div>
      <p>{snippet.title}</p>
      <Editor
        height="40vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
      <form action={() => editSnippetAction(snippet.id, code)}>
        <button className="p-2 border rounded" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default SnippetEditForm;
