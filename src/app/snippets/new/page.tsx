import { db } from '@/db';
import { redirect } from 'next/navigation';

const SnippetCreatePage = () => {
  async function createSnippet(formData: FormData) {
    'use server';

    // validate user input
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;

    // create new record
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });

    console.log(snippet);
    // redirect
    redirect('/');
  }

  return (
    <form action={createSnippet}>
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
            id="code"
            className="border rounded p-2 w-full bg-gray-800 border-gray-600"
          />
        </div>
        <button type="submit" className="rounded p-2 bg-blue-500">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SnippetCreatePage;
