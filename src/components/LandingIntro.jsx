import AnimatedTextWord from "./AnimatedTextWord";

const LandingIntro = ({ title, contents }) => {
  const contentData = contents.map((con, idx) => (
    <div key={idx} className="my-3 bg-[#19191E] p-2 rounded-lg">
      {con}
    </div>
  ));

  return (
    <div className="flex flex-col p-4 items-start justify-center bg-[#1E1E24] rounded-lg">
      <AnimatedTextWord text={title} size="2xl" />
      {contentData}
    </div>
  );
};

export default LandingIntro;
