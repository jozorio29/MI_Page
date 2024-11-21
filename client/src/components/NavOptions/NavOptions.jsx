import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./NavOptions.module.css";
import NavCard from "./NavCard/NavCard";

const NavOptions = ({
  miPhones,
  redmiPhones,
  tv,
  laptop,
  fitnessAndLifeStyle,
  home,
  audio,
  accessories,
}) => {
  const location = useLocation(); // Obtener la ruta actual
  const [miPhoneToggle, setMiPhoneToggle] = useState(false);
  const [redmiPhoneToggle, setRedmiPhoneToggle] = useState(false);
  const [tvToggle, setTvToggle] = useState(false);
  const [laptopToggle, setLaptopToggle] = useState(false);
  const [fitnessToggle, setFitnessToggle] = useState(false);
  const [homeToggle, setHomeToggle] = useState(false);
  const [audioToggle, setAudioToggle] = useState(false);
  const [accessoriesToggle, setAccessoriesToggle] = useState(false);

  useEffect(() => {
    const path = location.pathname; // Obtén la nueva ruta al cambiar
    setMiPhoneToggle(path === "/miphones");
    setRedmiPhoneToggle(path === "/redmiphones");
    setTvToggle(path === "/tv");
    setLaptopToggle(path === "/laptops");
    setFitnessToggle(path === "/lifestyle");
    setHomeToggle(path === "/home");
    setAudioToggle(path === "/audio");
    setAccessoriesToggle(path === "/accessories");
  }, [location]); // Escucha cambios en la ubicación

  return (
    <div className={styles.navOptions}>
      {miPhoneToggle &&
        miPhones.map((item) => (
          <NavCard
            name={item.name}
            price={item.price}
            image={item.image}
            key={item.image}
          />
        ))}
      {redmiPhoneToggle &&
        redmiPhones.map((item) => (
          <NavCard
            name={item.name}
            price={item.price}
            image={item.image}
            key={item.image}
          />
        ))}
      {tvToggle &&
        tv.map((item) => (
          <NavCard
            name={item.name}
            price={item.price}
            image={item.image}
            key={item.image}
          />
        ))}
      {laptopToggle &&
        laptop.map((item) => (
          <NavCard
            name={item.name}
            price={item.price}
            image={item.image}
            key={item.image}
          />
        ))}
      {fitnessToggle &&
        fitnessAndLifeStyle.map((item) => (
          <NavCard
            name={item.name}
            price={item.price}
            image={item.image}
            key={item.image}
          />
        ))}
      {homeToggle &&
        home.map((item) => (
          <NavCard
            name={item.name}
            price={item.price}
            image={item.image}
            key={item.image}
          />
        ))}
      {audioToggle &&
        audio.map((item) => (
          <NavCard
            name={item.name}
            price={item.price}
            image={item.image}
            key={item.image}
          />
        ))}
      {accessoriesToggle &&
        accessories.map((item) => (
          <NavCard
            name={item.name}
            price={item.price}
            image={item.image}
            key={item.image}
          />
        ))}
    </div>
  );
};

export default NavOptions;
