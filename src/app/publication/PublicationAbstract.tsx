"use client";

import { useId, useState } from "react";

type PublicationAbstractProps = {
  abstract: string;
};

export default function PublicationAbstract({
  abstract,
}: PublicationAbstractProps) {
  const [isVisible, setIsVisible] = useState(false);
  const abstractId = useId();

  return (
    <>
      <button
        className="publication-abstract-button"
        type="button"
        aria-controls={abstractId}
        aria-expanded={isVisible}
        onClick={() => setIsVisible((currentValue) => !currentValue)}
      >
        ABS
      </button>

      <div
        className={`publication-abstract-panel${isVisible ? " is-open" : ""}`}
        id={abstractId}
        aria-hidden={!isVisible}
      >
        <div className="publication-abstract-panel-inner">
          <p className="publication-abstract">{abstract}</p>
        </div>
      </div>
    </>
  );
}
