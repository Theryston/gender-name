export interface IModel {
  name: string;
  replicateName: string;
  replicateStableVersion: string;
  country: string;
  type: string;
}

export const models: IModel[] = [{
  name: "gnbr",
  replicateName: "theryston/gnbr",
  replicateStableVersion: "e1c900238d93fd81a757ce929b1ef694e652fe03bd9a841333ceada80d7e3b6f",
  country: "USA",
  type: "HUMAN_NAME"
}];
