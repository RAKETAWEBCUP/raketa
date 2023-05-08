import React from "react";

import { ReactComponent as Anemo } from './assets/Anemo.svg';
import { ReactComponent as DarkAnemo } from './assets/DarkAnemo.svg';
import { ReactComponent as Cryo } from './assets/Cryo.svg';
import { ReactComponent as Electro } from './assets/Electro.svg';
import { ReactComponent as Geo } from './assets/Geo.svg';
import { ReactComponent as Pyro } from './assets/Pyro.svg';

const tabs = [
  {
    title: "Anemo",
    id: "Anemo",
    icon: <Anemo />,
    darkIcon: <DarkAnemo />,
  },
  {
    title: "Electro",
    id: "Electro",
    icon: <Electro />,
    darkIcon: <DarkAnemo />,
  },
  {
    title: "Geo",
    id: "Geo",
    icon: <Geo />,
    darkIcon: <DarkAnemo />,
  },
  {
    title: "Cryo",
    id: "Cryo",
    icon: <Cryo />,
    darkIcon: <DarkAnemo />,
  },
  {
    title: "Pyro",
    id: "Pyro",
    icon: <Pyro />,
    darkIcon: <DarkAnemo />,
  }
];

export default tabs;
