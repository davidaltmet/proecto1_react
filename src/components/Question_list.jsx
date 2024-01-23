import Question from "./Question";

function Question_list() {
  return (
    <div
      className="w-full lg:w-1/3   flex flex-col gap-4 text-white
     bg-Very-dark-blue p-6 "
    >
      <h2 className="title_questions text-Soft-orange font-bold text-4xl  ">
        New
      </h2>
      <Question
        subtitle="Hydrogen VS Electric Cars"
        paragraph="Will hydrogen-fueled cars ever catch up to EVs?"
        darborder
      />
      <Question
        subtitle="The Downsides of AI Artistry"
        paragraph=" What are the possible adverse effects of on-demand AI image generation?  "
        darborder
      />
      <Question
        subtitle="Is VC Funding Drying Up?"
        paragraph=" Private funding by VC firms is down 50% YOY. We take a look at what that means."
      />
    </div>
  );
}

export default Question_list;
