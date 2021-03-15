import GitHubCalander from "react-github-calendar";
import { Row } from "react-bootstrap";
function Github() {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#6f472a",
    grade3: "#945e38",
    grade2: "#c08459",
    grade1: "#c7916b",
    grade0: "#e3c9b5",
  };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalander
        username="AhmadCr7"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
