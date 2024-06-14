'use client';

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error }: ErrorPageProps) => {
  return (
    <div>
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorPage;
