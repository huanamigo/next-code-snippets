'use client';

import { Editor } from '@monaco-editor/react';
import { Snippet } from '@prisma/client';
import { useState } from 'react';

interface SnippetEditFormProps {
  snippet: Snippet;
}

const SnippetEditForm = ({ snippet }: SnippetEditFormProps) => {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = '') => {
    setCode(value);
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
    </div>
  );
};

export default SnippetEditForm;
