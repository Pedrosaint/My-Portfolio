import { TypeAnimation } from "react-type-animation";

const TextEffects = () => {
  return (
    <TypeAnimation
      sequence={[
        "Frontend Engineer",
        1500,
        "React Specialist",
        1500,
        "UI Engineer",
        1500,
      ]}
      speed={50}
      className="text-2xl sm:text-3xl md:text-4xl text-claude-text-secondary font-light"
      repeat={Infinity}
    />
  );
};

export default TextEffects;
