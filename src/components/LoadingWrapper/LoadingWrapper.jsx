import { Loader } from "lucide-react";
import classNames from "classnames";

import "./LoadingWrapper.less";

const LoadingWrapper = ({ isLoading, children, className = "" }) => {
  return (
    <div className={classNames("loading-wrapper", className)}>
      {isLoading && (
        <div className="loading-wrapper__overlay">
          <Loader className="loading-wrapper__spinner" size={32} />
        </div>
      )}
      <div
        className={classNames("loading-wrapper__content", {
          "is-disabled": isLoading,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default LoadingWrapper;
