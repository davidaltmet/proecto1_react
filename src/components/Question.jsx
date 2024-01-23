function Question({ subtitle, paragraph, darborder }) {
  const borderClass = darborder ? "border-b border-Dark-grayish-blue" : "";
  return (
    <div className={`pb-10 ${borderClass}   space-y-5 `}>
      <h3 className="subtitle_question font-bold text-xl hover:text-Soft-orange cursor-pointer ">
        {subtitle}
      </h3>
      <p className="paragraph_question text-Grayish-blue">{paragraph}</p>
    </div>
  );
}

export default Question;
