function Feature_card({ imagen, num, title, paragraph }) {
  return (
    <div className="flex md:grid  md:place-items-center  lg:flex space-x-4">
      <img src={imagen} className="h-40 md:h-48  "></img>
      <div className="card_info_feature flex flex-col justify-between ">
        <span className="num_feature text-Grayish-blue font-bold text-2xl md:text-center ">
          {num}
        </span>
        <span className="title_feature text-Very-dark-blue font-bold text-xl md:text-center ">
          {title}
        </span>
        <p className="paragraph_feature text-Dark-grayish-blue text-15 md:text-center ">
          {paragraph}
        </p>
      </div>
    </div>
  );
}

export default Feature_card;
