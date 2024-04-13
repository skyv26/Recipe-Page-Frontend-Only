import React, { ReactNode, useRef } from 'react';

interface SwipeableComponentProps {
  children: ReactNode;
  currentIndex: number;
  setCurrentIndex: (num: number) => void;
}

const SwipeComponent: React.FC<SwipeableComponentProps> = ({
  children,
  currentIndex,
  setCurrentIndex,
}) => {
  const startX = useRef<number>(0);
  const startY = useRef<number>(0);

  // Minimum swipe distance threshold
  const SWIPE_THRESHOLD = 30;

  // Handle touch/mouse start
  const handleStart = (e: React.TouchEvent | React.MouseEvent) => {
    if ('touches' in e) {
      const touch = e.touches[0];
      startX.current = touch.clientX;
      startY.current = touch.clientY;
    } else {
      startX.current = e.clientX;
      startY.current = e.clientY;
    }
  };

  // Handle touch/mouse end
  const handleEnd = (e: React.TouchEvent | React.MouseEvent) => {
    let endX = 0;
    let endY = 0;

    if ('changedTouches' in e) {
      const touch = e.changedTouches[0];
      endX = touch.clientX;
      endY = touch.clientY;
    } else {
      endX = e.clientX;
      endY = e.clientY;
    }

    const diffX = endX - startX.current;
    const diffY = endY - startY.current;

    // Detect horizontal swipe
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > SWIPE_THRESHOLD) {
      if (diffX > 0) {
        // Swipe Right
        const newIndex = Math.max(0, currentIndex - 1);
        setCurrentIndex(newIndex);
      } else {
        // Swipe Left
        const newIndex = Math.min(10, currentIndex + 1); // Assuming 10 is the maximum index
        setCurrentIndex(newIndex);
      }
    }
  };

  return (
    <div
      className="w-screen h-screen bg-red-400"
      onTouchStart={handleStart}
      onTouchEnd={handleEnd}
      onMouseDown={handleStart}
      onMouseUp={handleEnd}
    >
      {children}
    </div>
  );
};

export default SwipeComponent;
