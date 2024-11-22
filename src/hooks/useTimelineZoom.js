import { useCallback, useState } from "react";

export function useTimelineZoom(initialZoom = 1) {
  const [zoom, setZoom] = useState(initialZoom);
  const [pan, setPan] = useState(0);

  const handleZoom = useCallback(
    (delta, point) => {
      const newZoom = Math.max(0.1, Math.min(10, zoom + delta * 0.1));
      setZoom(newZoom);
    },
    [zoom]
  );

  const handlePan = useCallback(delta => {
    setPan(prev => prev + delta);
  }, []);

  return { zoom, pan, handleZoom, handlePan };
}
