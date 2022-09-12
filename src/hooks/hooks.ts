import { useRef, useEffect } from 'react';

export default function UseDebounce(func: Function, delay: number, cleanUp: boolean = false) {
  const timeoutRef: any = useRef(null);
  function clearTimer() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  }

  useEffect(() => (cleanUp ? clearTimer : undefined), [cleanUp]);
  return (query: any) => {
    clearTimer();
    timeoutRef.current = setTimeout(() => {
      func(query);
    }, delay);
  };
}