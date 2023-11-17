export interface IModel {
  name: string;
  replicate_owner_name: string;
  replicate_name: string;
  replicate_public_url: string;
  replicate_stable_version: string;
  github_url: string;
  country: string;
  type: string;
}

export const models: IModel[] = [
  {
    name: 'gnbr',
    replicate_owner_name: 'theryston',
    replicate_name: 'gnbr',
    replicate_public_url: 'https://replicate.com/theryston/gnbr',
    replicate_stable_version:
      '5fb1931a1bd7f19a2635db60e28499416192cf837e790cf49eb96e121e9d2481',
    github_url:
      'https://github.com/Theryston/gender-name/tree/main/models/gnbr',
    country: 'BR',
    type: 'HUMAN_NAME',
  },
  {
    name: 'gnusa',
    replicate_owner_name: 'theryston',
    replicate_name: 'gnusa',
    replicate_public_url: 'https://replicate.com/theryston/gnusa',
    replicate_stable_version:
      '974ded744cc3bc0e1373ac33da558bd7d398f16f6d3623ef2b1889012a0d3d12',
    github_url:
      'https://github.com/Theryston/gender-name/tree/main/models/gnusa',
    country: 'USA',
    type: 'HUMAN_NAME',
  },
];
