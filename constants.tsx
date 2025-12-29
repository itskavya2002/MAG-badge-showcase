
import { BadgeData } from './types';

import mag1 from './assets/badges/mag-1.svg';
import mag2 from './assets/badges/mag-2.svg';
import mag3 from './assets/badges/mag-3.svg';
import mag4 from './assets/badges/mag-4.svg';
import mag5 from './assets/badges/mag-5.svg';
import mag6 from './assets/badges/mag-6.svg';
import mag7 from './assets/badges/mag-7.svg';
import mag8 from './assets/badges/mag-8.svg';
import mag9 from './assets/badges/mag-9.svg';


export const BADGES: BadgeData[] = [
  {
    id: 1,
    level: 1,
    name: "Initiate",
    description: "The beginning of a long journey. You have taken your first step into the MAG ranks.",
    rarity: "Common",
    icon: mag1,
    color: "#D9D0B4",
    glowColor: "rgba(217, 208, 180, 0.4)",
    unlocked: true
  },
  {
    id: 2,
    level: 2,
    name: "Vanguard",
    description: "Your reputation grows. You are now recognized as a reliable member of the collective.",
    rarity: "Uncommon",
    icon: mag2,
    color: "#7CB3A2",
    glowColor: "rgba(124, 179, 162, 0.4)",
    unlocked: true
  },
  {
    id: 3,
    level: 3,
    name: "Sentinel",
    description: "Standing firm. Your commitment to the cause is becoming undeniable.",
    rarity: "Rare",
    icon: mag3,
    color: "#4BA34B",
    glowColor: "rgba(75, 163, 75, 0.4)",
    unlocked: true
  },
  {
    id: 4,
    level: 4,
    name: "Overseer",
    description: "A leader among peers. Others look to your rank for guidance and inspiration.",
    rarity: "Rare",
    icon: mag4,
    color: "#8AC926",
    glowColor: "rgba(138, 201, 38, 0.4)",
    unlocked: true
  },
  {
    id: 5,
    level: 5,
    name: "Archon",
    description: "Master of the core tenets. You embody the spirit of progression.",
    rarity: "Epic",
    icon: mag5,
    color: "#386641",
    glowColor: "rgba(56, 102, 65, 0.4)",
    unlocked: true
  },
  {
    id: 6,
    level: 6,
    name: "Sovereign",
    description: "Wielding authority. Your presence in the ranks commands respect.",
    rarity: "Epic",
    icon: mag6,
    color: "#D4A373",
    glowColor: "rgba(212, 163, 115, 0.4)",
    unlocked: true
  },
  {
    id: 7,
    level: 7,
    name: "Ascendant",
    description: "Rising above the ordinary. A status achieved only by the most dedicated.",
    rarity: "Legendary",
    icon: mag7,
    color: "#BC6C25",
    glowColor: "rgba(188, 108, 37, 0.4)",
    unlocked: true
  },
  {
    id: 8,
    level: 8,
    name: "Exalted",
    description: "A mythic figure. Your name is etched into the higher halls of honor.",
    rarity: "Mythic",
    icon: mag8,
    color: "#A22C29",
    glowColor: "rgba(162, 44, 41, 0.4)",
    unlocked: true
  },
  {
    id: 9,
    level: 9,
    name: "Celestial",
    description: "The ultimate peak. You have reached the final stage of evolution.",
    rarity: "Celestial",
    icon: mag9,
    color: "#0077B6",
    glowColor: "rgba(0, 119, 182, 0.4)",
    unlocked: true
  }
];
