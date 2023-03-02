"use client"

import React, { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";

interface Props {
  children: string;
  className: string;
}

const CodeBlock = ({ children, className }: Props) => {
  const ref = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current);
    }
  }, []);

  const langage = className.split("-")[1]

  return (
    <pre>
      <code ref={ref} className={`language-${langage}`}>
        {children}
      </code>
    </pre>
  );
};

export default CodeBlock;