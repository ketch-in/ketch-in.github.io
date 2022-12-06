import { useState } from "react";
import StickySection from "./StickySection";
import TextTransitionGroup from "./TextTransition";

interface FeatureItem {
  style?: React.CSSProperties;
  content?: string;
  category: string;
}
interface FeaturesProps {
  items?: { [key: string]: FeatureItem[] };
}

export default function Features({ items = {} }: FeaturesProps) {
  const [active, setActive] = useState("host");
  const categories = Object.keys(items);

  return (
    <StickySection
      id="features"
      style={{
        top: "calc(50% - 250px)",
        left: "calc(50% - 450px)",
        width: "900px",
        height: "600px",
      }}
      header="특징"
      scrollSize="3000vh"
    >
      <ul className="menu">
        <li className="active">
          {`${active
            .split(" ")
            .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
            .join(" ")}`}
        </li>
      </ul>
      <TextTransitionGroup
        style={{ width: "100%", height: "600px" }}
        onChange={({ category }) => {
          if (category) {
            setActive(category);
          }
        }}
      >
        {Object.keys(items)
          .map((category) =>
            items[category].map((item, idx) => (
              <div
                key={item.content}
                data-category={category}
                className="feature"
                style={item.style ?? {}}
                dangerouslySetInnerHTML={{
                  __html: item.content || "",
                }}
              />
            ))
          )
          .flat()}
      </TextTransitionGroup>
    </StickySection>
  );
}
