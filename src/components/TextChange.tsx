import { ReactNode, useEffect } from "react";

interface Props {
  id: string;
  parentId: string;
  InElement: ReactNode;
  OutElement: ReactNode;
}

export default function TextChange({
  id,
  parentId,
  InElement,
  OutElement,
}: Props) {
  console.log(1);
  useEffect(() => {
    const handleScroll = () => {
      const page = document.getElementById(parentId);

      if (!page) {
        return;
      }
      const { y } = page.getBoundingClientRect();

      if (y > 0) {
        return;
      }

      const elIn = page.querySelector(`#${id} .in`) as HTMLElement;
      const elOut = page.querySelector(`#${id} .out`) as HTMLElement;

      if (!elIn || !elOut) {
        return;
      }

      const pos = y * -1;
      const rowPercent = (pos / 2500) * 100;
      const percent = rowPercent > 100 ? 100 : rowPercent;

      if (percent < 30) {
        elIn.style.display = "inline-block";
        elOut.style.display = "none";
        elIn.style.opacity = `${(30 - percent) / 30}`;
        elIn.style.transform = `matrix(${(30 - percent) / 30}, 0, 0, ${
          (30 - percent) / 30
        }, 0, 0)`;
        return;
      }
      if (percent < 60) {
        console.log(60 - percent);
        elIn.style.display = "none";
        elOut.style.display = "inline-block";
        elOut.style.opacity = `${(percent - 30) / 30}`;
        elOut.style.transform = `1, 0, 0, 1, 0, ${60 - percent})`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [id, parentId]);

  return (
    <span id={id} className="word">
      <span className="in">{InElement}</span>
      <span
        className="out"
        style={{
          transition: "all 1s",
          display: "none",
          opacity: 0,
        }}
      >
        {OutElement}
      </span>
    </span>
  );
}
