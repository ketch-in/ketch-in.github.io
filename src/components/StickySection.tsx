interface StickySectionProps {
  id: string;
  header?: string;
  style: React.CSSProperties;
  children: React.ReactNode;
  scrollSize: string;
}

export default function StickySection({
  id,
  style,
  header,
  children,
  scrollSize,
}: StickySectionProps) {
  return (
    <section
      id={id}
      style={{
        width: "100vw",
        height: scrollSize,
      }}
    >
      <div
        id={`${id}-element`}
        style={{
          top: "0px",
          position: "sticky",
          height: "100vh",
          overflow: "hidden",
          width: "100vw",
        }}
      >
        <div
          id={`${id}-content`}
          style={{
            ...style,
            position: "absolute",
          }}
        >
          {header && (
            <h1
              style={{ width: "100%", textAlign: "center", fontSize: "2rem" }}
            >
              {header}
            </h1>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
