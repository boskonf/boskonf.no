import { no } from "./i18n/translations";

type TranslationKey = keyof typeof no;

export type Member = {
  name: string;
  positionKey: TranslationKey;
};

export const members: Member[] = 
[
  {
    "name": "Christian Engelsen",
    "positionKey": "board.leader"
  },
  {
    "name": "Johannes Lysne",
    "positionKey": "board.deputyleader"
  },
  {
    "name": "Johannes Skivdal",
    "positionKey": "board.financialmanager"
  },
  {
    "name": "Sindre Kjelsrud",
    "positionKey": "board.sponsorshipmanager"
  },
  {
    "name": "Ole Gåsvær",
    "positionKey": "board.pr"
  }
]