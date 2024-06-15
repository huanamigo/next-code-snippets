'use server';

import { db } from '@/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });
  revalidatePath(`/snippets/${id}`);

  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });
  revalidatePath('/');
  redirect('/');
}

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  try {
    // validate user input
    const title = formData.get('title');
    const code = formData.get('code');

    if (typeof title !== 'string' || title.length < 3) {
      return {
        message: 'Title must contain more than 3 characters',
      };
    }

    if (typeof code !== 'string' || code.length < 10) {
      return {
        message: 'Your code must be longer than 10 characters',
      };
    }

    // create new record
    await db.snippet.create({
      data: {
        title,
        code,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        message: err.message,
      };
    } else {
      return {
        message: 'Something went wrong, try again later',
      };
    }
  }
  revalidatePath('/');

  redirect('/');
}
