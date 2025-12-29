
export interface BadgeData {
  id: number;
  level: number;
  name: string;
  description: string;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary' | 'Mythic' | 'Celestial';
  color: string;
  glowColor: string;
  unlocked: boolean;
}

export enum SectionType {
  Hero = 'hero',
  Grid = 'grid',
  Spotlight = 'spotlight',
  Footer = 'footer'
}
