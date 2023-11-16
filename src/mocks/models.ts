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
      'e1c900238d93fd81a757ce929b1ef694e652fe03bd9a841333ceada80d7e3b6f',
    githubUrl: 'https://github.com/Theryston/gender-name/tree/main/models/gnbr',
    country: 'USA',
    type: 'HUMAN_NAME',
  },
];
