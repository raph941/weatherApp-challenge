import React, { FC } from "react";
import "./Loader.css";

interface LoaderProps {
  loading?: boolean;
}

const Loader: FC<LoaderProps> = ({ children, loading }) => {
  return loading ? (
    <div className="loader">
      <div className="loader-element" />
      Loading
    </div>
  ) : (
    <>{children}</>
  );
};

export { Loader };
