'use client';

import { Editor } from '@monaco-editor/react';
import { Snippet } from '@prisma/client';

interface SnippetEditFormProps {
  snippet: Snippet;
}

const SnippetEditForm = ({ snippet }: SnippetEditFormProps) => {
  return (
    <div>
      <p>{snippet.title}</p>
      <Editor
        height="40vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
      />
    </div>
  );
};

export default SnippetEditForm;
