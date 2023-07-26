type Props = {
  error: Error;
  reset: VoidFunction;
};

function ApiErrorFallback({ error, reset }: Props) {
  return (
    <div>
      <h1>{error.message}</h1>
      <button onClick={reset}>RESET</button>
    </div>
  );
}

export default ApiErrorFallback;
