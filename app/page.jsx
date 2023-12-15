import Components from "@/components/global";
import data from "../data/home.json";

const Home = () => {
  return (
    <main>
      {data.map((item, index) => {
        const { name, title, description, items } = item;
        const Component = Components[name];

        if (!Component) return null;

        return (
          <Component
            key={index}
            title={title}
            description={description}
            items={items}
          />
        );
      })}
    </main>
  );
};

export default Home;
