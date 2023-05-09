export interface IModel {
  name: string;
  huggingface: string;
  country: string;
  type: string;
  loss: number;
  accuracy: number;
  macro_f1: number;
  micro_f1: number;
  weighted_f1: number;
  macro_precision: number;
  micro_precision: number;
  weighted_precision: number;
  macro_recall: number;
  micro_recall: number;
  weighted_recall: number;
}

export const models: IModel[] = [
  {
    name: 'gnb',
    huggingface: 'theryston/gender-name',
    country: 'Brazil',
    type: 'human_name',
    loss: 0.262,
    accuracy: 0.917,
    macro_f1: 0.917,
    micro_f1: 0.917,
    weighted_f1: 0.917,
    macro_precision: 0.919,
    micro_precision: 0.917,
    weighted_precision: 0.919,
    macro_recall: 0.917,
    micro_recall: 0.917,
    weighted_recall: 0.917,
  },
];
