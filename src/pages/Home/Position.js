import Typewriter from "typewriter-effect";

function Position() {
  return (
    <Typewriter
      options={{
        strings: [
          "Nice to meet you! 😄",
          "Internet Application Design & Development",
          "Human-Computer Interaction; UI/UX",
          "Database System Design",
          "Software Engineering & Development",
          "Computer Organization & Machine Structures",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Position;
