import TextTransitionGroup from "./TextTransition";
import logoMark from "../icons/logoMark.png";
import StickySection from "./StickySection";

export default function About() {
  return (
    <StickySection
      id="about"
      style={{
        top: "calc(50% - 250px)",
        left: "calc(50% - 450px)",
        width: "900px",
        height: "600px",
      }}
      scrollSize="400vh"
    >
      <h1 style={{ fontSize: "3.5rem" }}>
        같은
        <TextTransitionGroup style={{ width: "24rem", height: "3rem" }}>
          kitchen
          <>
            KETCH IN <img src={logoMark} style={{ width: "3rem" }} />
          </>
        </TextTransitionGroup>
        에서
        <br />
        함께 요리하거나{" "}
        <TextTransitionGroup style={{ width: "24rem", height: "3rem" }}>
          catch in
          <>
            KETCH IN <img src={logoMark} style={{ width: "3rem" }} />
          </>
        </TextTransitionGroup>{" "}
        펜!
      </h1>
      <p
        style={{
          fontSize: "1.5rem",
          textAlign: "center",
          padding: "0 40px",
        }}
      >
        KETCH IN <img src={logoMark} style={{ width: "1rem" }} /> 은 화면 위에
        그리기를 할 수 있도록 도와주는 간단한 도구입니다.
        <br />
        오프라인에서 회의하는 것처럼 누구나 의견을 제시할 수 있도록 다른 사람도
        내 화면에 그리기를 허용할 수 있습니다. 오프라인에서도 실질적인 거리를
        줄일 수 있는 대안으로도 활용될 수 있습니다.
      </p>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "2rem",
        }}
      >
        <a
          className="button primary"
          href="#download"
          style={{ width: "150px" }}
        >
          사용해보기
        </a>
        <a
          className="button secondary"
          href="#features"
          style={{ width: "150px" }}
        >
          더 자세히 알아보기
        </a>
      </div>
    </StickySection>
  );
}
