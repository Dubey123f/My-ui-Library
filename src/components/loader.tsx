"use client";
import React from "react";

type LoaderVariant = "spinner" | "dots" | "pulse" | "wave";

interface LoaderProps {
  variant?: LoaderVariant;
  color?: string;
  size?: number;
}

const Loader: React.FC<LoaderProps> = ({ variant = "spinner", color = "#3b82f6", size = 40 }) => {
  switch (variant) {
    case "dots":
      return (
        <div className="flex space-x-2 justify-center items-center">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-3 h-3 rounded-full animate-bounce"
              style={{ backgroundColor: color, animationDelay: `${i * 0.15}s` }}
            ></span>
          ))}
        </div>
      );

    case "pulse":
      return (
        <div className="flex justify-center items-center">
          <span
            className="rounded-full animate-pulse"
            style={{ backgroundColor: color, width: size, height: size }}
          ></span>
        </div>
      );

    case "wave":
      return (
        <div className="flex space-x-1 justify-center items-end h-8">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="w-2 h-6 rounded-full animate-[bounce_0.6s_infinite]"
              style={{
                backgroundColor: color,
                animationDelay: `${i * 0.15}s`,
              }}
            ></span>
          ))}
        </div>
      );

    default: // spinner
      return (
        <div className="flex justify-center items-center">
          <div
            className="rounded-full animate-spin"
            style={{
              width: size,
              height: size,
              borderWidth: size / 6,
              borderColor: color,
              borderTopColor: "transparent",
            }}
          ></div>
        </div>
      );
  }
};

export { Loader };
