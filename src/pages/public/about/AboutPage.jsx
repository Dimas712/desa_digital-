import PeopleCard from "./components/PeopleCard";
import Footer from "../../../components/Footer";
import Navigation from "../../../components/Navigation";

const AboutPage = () => {
  return (
    <>
    <Navigation/>
      <div
        data-aos="fade-down"
        className="container max-w-screen-xl mt-32 mb-8 px-8 flex flex-col">
        <div className="text-black text-[45px] md:text-8xl font-black max-w-screen-xl mt-32 mb-8 md:px-8 leading-none">
          Temui Tim
          <br />
          Kami
        </div>
        <div className="flex flex-row gap-6 overflow-x-auto overflow-y-hidden">
          <PeopleCard
            img="/assets/images/Foto_Dimas.png"
            nama="Dimas Alip Faturrohim"
            univ="Universitas Singaperbangsa Karawang"
            ig="https://www.instagram.com/faturrohimdimas/"
            linkedin="https://www.linkedin.com/in/dimas-alip-faturrohim-346b18260/?trk=public-profile-join-page"
            github="https://github.com/Dimas712"
          />
          <PeopleCard
            img="/assets/images/Foto_Rosa.png"
            nama="Fajar Syahrul Hidayat"
            univ="Universitas Singaperbangsa Karawang"
            ig="https://www.instagram.com/fasyhi23/"
            linkedin="https://www.linkedin.com/in/rosaagnelia"
            github="https://github.com/rossaagnelia"
          />
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default AboutPage;
