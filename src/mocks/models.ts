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
    country: 'USA',
    type: 'HUMAN_NAME',
  },
];
