import Typewriter from "typewriter-effect";

function Position() {
  return (
    <Typewriter
      options={{
        strings: [
          "Nice to meet you! 😄",
          "Full Stack Developer",
          "Software Design & Development",
          "Database Design & Development",
          "Computer Organization & Machine Structures",
          "I can also do UI/UX",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Position;
