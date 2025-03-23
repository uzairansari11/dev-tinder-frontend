import React from 'react';

export const FullscreenLoader = ({
  size = '4xl',
  overlay = true,
  message = 'Loading...',
  className = '',
  ...otherProps
}) => {
  // Custom size classes for larger than standard DaisyUI sizes
  const sizeClasses = {
    md: 'loading-md',
    lg: 'loading-lg',
    xl: 'loading-xl',
    '2xl': 'w-24 h-24',
    '3xl': 'w-32 h-32',
    '4xl': 'w-40 h-40', // This is really big
    '5xl': 'w-52 h-52', // Enormous
  };

  const sizeClass = sizeClasses[size] || 'loading-xl';

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-center items-center ${
        overlay ? 'bg-base-100 bg-opacity-80' : ''
      } ${className}`}
      {...otherProps}
    >
      <span
        className={`loading loading-infinity ${sizeClass} text-primary mb-6`}
      ></span>

      {message && <div className="text-xl font-semibold mt-4">{message}</div>}
    </div>
  );
};

// Usage examples:
// <FullscreenLoader /> - Default fullscreen with overlay
// <FullscreenLoader size="5xl" message="Processing your request..." /> - Larger with custom message
// <FullscreenLoader overlay={false} /> - Without overlay
