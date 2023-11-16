export interface IModel {
  name: string;
  replicateOwnerName: string;
  replicateName: string;
  replicatePublicUrl: string;
  replicateStableVersion: string;
  githubUrl: string;
  country: string;
  type: string;
}

export const models: IModel[] = [
  {
    name: 'gnbr',
    replicateOwnerName: 'theryston',
    replicateName: 'gnbr',
    replicatePublicUrl: 'https://replicate.com/theryston/gnbr',
    replicateStableVersion:
      '5fb1931a1bd7f19a2635db60e28499416192cf837e790cf49eb96e121e9d2481',
    githubUrl: 'https://github.com/Theryston/gender-name/tree/main/models/gnbr',
    country: 'BR',
    type: 'HUMAN_NAME',
  },
  {
    name: 'gnusa',
    replicateOwnerName: 'theryston',
    replicateName: 'gnusa',
    replicatePublicUrl: 'https://replicate.com/theryston/gnusa',
    replicateStableVersion: '974ded744cc3bc0e1373ac33da558bd7d398f16f6d3623ef2b1889012a0d3d12',
    githubUrl: 'https://github.com/Theryston/gender-name/tree/main/models/gnusa',
    country: 'USA',
    type: 'HUMAN_NAME'
  }
];
