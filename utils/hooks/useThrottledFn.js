import { useCallback } from 'react';
import { throttle } from 'throttle-debounce';

const useThrottledFn = (fn, wait = 100, dependencies) => {
  const throttled = throttle(wait, fn);

  return useCallback(throttled, dependencies);
};

export default useThrottledFn;
