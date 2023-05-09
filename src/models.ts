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
    name: 'gn-1',
    huggingface: 'theryston/gender-name',
    country: 'BR',
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
  {
    name: 'gnbr',
    huggingface: 'theryston/gnbr',
    country: 'BR',
    type: 'human_name',
    loss: 0.36,
    accuracy: 0.848,
    macro_f1: 0.848,
    micro_f1: 0.848,
    weighted_f1: 0.848,
    macro_precision: 0.863,
    micro_precision: 0.848,
    weighted_precision: 0.866,
    macro_recall: 0.848,
    micro_recall: 0.864,
    weighted_recall: 0.848,
  },
  {
    name: 'gnusa',
    huggingface: 'theryston/gnusa',
    country: 'USA',
    type: 'human_name',
    loss: 0.371,
    accuracy: 0.862,
    macro_f1: 0.862,
    micro_f1: 0.862,
    weighted_f1: 0.862,
    macro_precision: 0.853,
    micro_precision: 0.862,
    weighted_precision: 0.854,
    macro_recall: 0.849,
    micro_recall: 0.864,
    weighted_recall: 0.862,
  },
];
