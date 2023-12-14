import Link from "next/link";

// menu
const menu = [
  {
    name: "Flight",
    path: "/flight",
  },
  {
    name: "Umrah",
    path: "/umrah",
  },
  {
    name: "Hotel",
    path: "/hotel",
  },
  {
    name: "Visa",
    path: "/visa",
  },
];

const Menu = () => {
  return (
    <ul className="flex flex-col gap-y-3 lg:flex-row lg:gap-x-8 xl:gap-x-10">
      {menu.map((item, index) => (
        <li key={index}>
          <Link
            href={item.path}
            className="text-sm lg:text-base text-t-700 inline-flex py-2 lg:px-2 duration-300 hover:text-p-900"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
