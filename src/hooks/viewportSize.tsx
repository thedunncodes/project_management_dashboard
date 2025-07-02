import { useEffect, useState } from 'react';

export default function GetViewport() {
  const [ vpWidth, setVpWidth ] = useState<number>(0);
  const [ vpHeight, setVpHeight ] = useState<number>(0);

  useEffect(() => {
    function getWidthOnResize() {
        setVpWidth(window.innerWidth);
        setVpHeight(window.innerHeight);
    }

    setVpWidth(window.innerWidth);
    setVpHeight(window.innerHeight);
    window.addEventListener('resize', getWidthOnResize);
    return () => window.addEventListener('resize', getWidthOnResize);
  }, [])

  return [vpWidth, vpHeight]
  
}