import React from "react";
import { ReactNode, useEffect, useRef, useState } from "react";

interface Props {
  second?: number;
  enabled?: boolean;
  children: ReactNode;
}

function TextTransition({ children, second = 1, enabled = false }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [height, setHeight] = useState(2000);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    setHeight(ref.current.clientHeight);
  }, []);

  return (
    <span
      style={{
        width: "100%",
        position: "absolute",
        display: "inline-flex",
        flexWrap: "wrap",
        alignItems: "flex-end",
        overflow: "hidden",
        justifyContent: "center",
      }}
    >
      <span
        ref={ref}
        style={{
          opacity: enabled ? "1" : "0",
          transform: `matrix(1, 0, 0, 1, 0, ${enabled ? 0 : height + 10})`,
          transition: `all ${second}s`,
        }}
      >
        {children}
      </span>
    </span>
  );
}

interface TextTransitionGroupProps {
  style?: React.CSSProperties;
  second?: number;
  children: ReactNode;
  onChange?: (data: { [key: string]: any }) => void;
}

export default function TextTransitionGroup({
  style,
  children,
  second = 0.8,
  onChange = () => {},
}: TextTransitionGroupProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [currentIdx, setIdx] = useState(0);

  const items = React.Children.toArray(children);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) {
        return;
      }
      const parent = ref.current.closest("section");
      if (!parent) {
        return;
      }
      const { y, height } = parent.getBoundingClientRect();
      const current = y * -1;
      if (current < 0) {
        return;
      }
      const cnt = height / (items.length + 1);
      const newIdx = parseInt((current / cnt).toFixed(0));
      if (newIdx >= items.length) {
        return;
      }
      setIdx(newIdx === items.length ? items.length - 1 : newIdx);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const select = items[currentIdx] as React.ReactHTMLElement<any>;
    if (typeof select === "object") {
      const props = Object.assign(select?.props || {});
      onChange(
        Object.keys(props)
          .filter((key) => key.split("data-").length === 2)
          .reduce<{ [key: string]: any }>(
            (acc, key) => ({ ...acc, [key.replace("data-", "")]: props[key] }),
            {}
          )
      );
    }
  }, [currentIdx]);

  return (
    <span
      ref={ref}
      style={{
        ...style,
        position: "relative",
        display: "inline-block",
      }}
    >
      {items.map((item, idx) => (
        <TextTransition key={idx} second={second} enabled={currentIdx === idx}>
          {item}
        </TextTransition>
      ))}
    </span>
  );
}
