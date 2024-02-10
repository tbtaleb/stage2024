import { ChosenHouses } from './ChosenHouses';
import { ChosenProducts } from './chosenProducts';
import { ChosenActivityRebois } from './ChosenActivityRebois';
import { ChosenTeamB } from './ChosenTeamB';
import { Societe } from './societe';

export class Devis {
  id: number;
  societe: Societe;
  chosenHouses: ChosenHouses[];
  chosenProducts: ChosenProducts[];
  chosenTeamB: ChosenTeamB;
  chosenActivityRebois: ChosenActivityRebois;
}
