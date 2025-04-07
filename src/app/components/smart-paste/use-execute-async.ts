import { useState } from "react";

export function useExecuteAsync<TArgs extends unknown[]>(
  fn: (...args: TArgs) => Promise<void>
): { isExecuting: boolean; error?: Error; execute: (...args: TArgs) => Promise<void> } {
  const [isExecuting, setIsExecuting] = useState(false);
  const [error, setError] = useState<Error>();

  const execute = (...args: TArgs) => {
    setIsExecuting(true);
    setError(undefined);

    return fn(...args)
      .catch((err) => {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error("Something went wrong"));
        }
      })
      .finally(() => setIsExecuting(false));
  };

  return {
    isExecuting,
    error,
    execute,
  };
}
