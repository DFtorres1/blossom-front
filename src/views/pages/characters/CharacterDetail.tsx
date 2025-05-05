import { useParams } from "react-router-dom";

const CharacterDetail = () => {
  const { id } = useParams();
  return (
    <section
      className={`${
        id ? "block" : "hidden"
      } md:col-span-1 lg:col-span-2 xl:col-span-3 md:block`}
    >
      <div className="px-6 md:px-24 py-10">
        {id ? <>ola</> : <>Selecciona un personaje</>}
      </div>
    </section>
  );
};

export default CharacterDetail;
