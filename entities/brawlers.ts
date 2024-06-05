interface StarPower {
  id: string;
  name: string;
}

interface Gadget {
  id: string;
  name: string;
}

export interface Brawlers {
  id: string;
  name: string;
  starPowers: StarPower[];
  gadgets: Gadget[];
}