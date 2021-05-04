import { useState, useEffect } from 'react';
import {
  BREAKPOINT_MIN,
  BREAKPOINT_XS,
  BREAKPOINT_XM,
  BREAKPOINT_SM,
  BREAKPOINT_MD,
  BREAKPOINT_LG,
  BREAKPOINT_XL,
  BREAKPOINT_XXL,
  BREAKPOINT_MAX,
} from '../constants';
import useWindowSize from './useWindowSize';

const breakpoints = [
  BREAKPOINT_MIN,
  BREAKPOINT_XS,
  BREAKPOINT_XM,
  BREAKPOINT_SM,
  BREAKPOINT_MD,
  BREAKPOINT_LG,
  BREAKPOINT_XL,
  BREAKPOINT_XXL,
  BREAKPOINT_MAX,
];

const getClosestBreakpoint = (width) =>
  breakpoints.reduce((previous, current) => {
    if (width >= current) {
      return current;
    }

    return previous;
  }, BREAKPOINT_MIN);

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(BREAKPOINT_MIN);
  const windowSize = useWindowSize(BREAKPOINT_MIN);

  useEffect(() => setBreakpoint(getClosestBreakpoint(windowSize.width)), [
    windowSize.width,
  ]);

  return breakpoint;
};

export default useBreakpoint;
