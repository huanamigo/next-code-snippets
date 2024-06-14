'use client';

import { createSnippet } from '@/actions/actions';
import { Editor } from '@monaco-editor/react';
import { useState } from 'react';
import { useFormState } from 'react-dom';

const SnippetCreatePage = () => {
  const [formState, action] = useFormState(createSnippet, { message: '' });
  const [codeValue, setCodeValue] = useState('');

  const handleCodeChange = (value: string = '') => {
    setCodeValue(value);
  };

  return (
    <form action={action}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            id="title"
            className="border rounded p-2 w-full bg-gray-800 border-gray-600 "
            type="text"
          />
        </div>
        <div className="flex gap-4 ">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            className="hidden"
            value={codeValue}
            onChange={(e) => setCodeValue(e.target.value)}
          />
          <Editor
            height="40vh"
            theme="vs-dark"
            defaultLanguage="javascript"
            defaultValue={codeValue}
            options={{ minimap: { enabled: false } }}
            onChange={handleCodeChange}
          />
        </div>

        {formState.message ? (
          <div className="my-2 p-2 bg-red-600 border rounded border-red-800">
            {formState.message}
          </div>
        ) : null}

        <button type="submit" className="rounded p-2 bg-blue-500">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SnippetCreatePage;
