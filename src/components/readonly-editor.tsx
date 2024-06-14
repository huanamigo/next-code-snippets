'use client';

import { Editor } from '@monaco-editor/react';
import { Snippet } from '@prisma/client';

interface SnippetEditFormProps {
  snippet: Snippet;
}

const ReadOnlyEditor = ({ snippet }: SnippetEditFormProps) => {
  return (
    <Editor
      height="40vh"
      theme="vs-dark"
      defaultLanguage="javascript"
      defaultValue={snippet.code}
      options={{ minimap: { enabled: false }, readOnly: true }}
    />
  );
};

export default ReadOnlyEditor;
