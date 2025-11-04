import { TypeAnimation } from "react-type-animation";

const TextEffects = () => {
  return (
    <TypeAnimation
      sequence={[
        "Web developer",
        1500,
        "Programmer",
        1500,
      ]}
      speed={50}
      className="text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase"
      repeat={Infinity}
    />
  );
};
 export default TextEffects
