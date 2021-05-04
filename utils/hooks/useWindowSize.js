import { useEffect } from 'react';
import useRafState from './useRafState';
import { isClient } from '../environment';
import useThrottledFn from './useThrottledFn';

const useWindowSize = (initialWidth = Infinity, initialHeight = Infinity) => {
  const [state, setState] = useRafState({
    width: isClient ? window.innerWidth : initialWidth,
    height: isClient ? window.innerHeight : initialHeight,
  });

  const handler = () =>
    setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });

  const handleResize = useThrottledFn(handler, 250);

  useEffect(() => {
    if (isClient) {
      window.addEventListener('resize', handleResize);
      window.addEventListener('orientationchange', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('orientationchange', handleResize);
      };
    }
  }, []);

  return state;
};

export default useWindowSize;
