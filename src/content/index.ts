import KommaIgang from "./komma-igang";
import Variabler from "./variabler";
import Operatorer from "./operatorer";
import Villkorssatser from "./villkorssatser";
import Repetitionssatser from "./repetitionssatser";
import Samlingar from "./samlingar";
import Metoder from "./metoder";
import Pygame from "./speltillampningar";

export const ModuleContent: Record<string, React.FC> = {
  "komma-igang": KommaIgang,
  "variabler": Variabler,
  "operatorer": Operatorer,
  "villkorssatser": Villkorssatser,
  "repetitionssatser": Repetitionssatser,
  "samlingar": Samlingar,
  "metoder": Metoder,
  "speltillampningar-pygame": Pygame,
};
