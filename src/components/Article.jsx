import imagenDesktop from "../assets/images/image-web-3-desktop.jpg";
import imagenMobile from "../assets/images/image-web-3-mobile.jpg";

function Article() {
  return (
    <div className="cont_article w-full  lg:w-2/3  overflow-hidden ">
      <img src={imagenDesktop} alt="" className="img w-full hidden lg:flex" />
      <img src={imagenMobile} alt="" className="img w-full lg:hidden " />
      <div className="info_article my-5 grid lg:grid-cols-2  ">
        <h1 className="title_info_article text-4xl lg:text-6xl font-extrabold text-Very-dark-blue leading-tight ">
          The Bright Future of Web 3.0?
        </h1>
        <div className="card_button_article mt-4 lg:mt-0 flex flex-col space-y-8 lg:space-y-4  ">
          <p className="paragraph_article flex-1 text-15 text-Dark-grayish-blue leading-7 ">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <div className="cont_boton">
            <button
              className="boton_article bg-Soft-red transition-colors uppercase
           text-Off-white  py-3 px-10  hover:bg-Very-dark-blue tracking-widest"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
