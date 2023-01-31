import { useEffect, useState } from 'react';

export default function useDeviceDetect() {
  const [isTouchOnly, setTouchOnly] = useState(false);

  useEffect(() => {
    const touchOnly =
      window.matchMedia && window.matchMedia('(any-hover: none)').matches;

    setTouchOnly(touchOnly);
  }, []);

  return { isTouchOnly };
}
