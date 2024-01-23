import Feature_card from "./Feature_card";
import imagen1 from "../assets/images/image-retro-pcs.jpg";
import imagen2 from "../assets/images/image-top-laptops.jpg";
import imagen3 from "../assets/images/image-gaming-growth.jpg";

function Features() {
  return (
    <section className="mt-10 grid md:grid-cols-3  gap-3">
      <Feature_card
        imagen={imagen1}
        num="01"
        title="Reviving Retro PCs"
        paragraph="What happens when old PCs are given modern upgrades?"
      />
      <Feature_card
        imagen={imagen2}
        num="02"
        title="Top 10 Laptops of 2022"
        paragraph="Our best picks for various needs and budgets."
      />
      <Feature_card
        imagen={imagen3}
        num="03"
        title="The Growth of Gaming"
        paragraph=" How the pandemic has sparked fresh opportunities."
      />
    </section>
  );
}

export default Features;
