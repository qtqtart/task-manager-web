import { UserModel } from "@entities/user";

export interface ProjectModel {
  id: string;
  title: string;
  description?: string;
  imageUrl?: string;
  isArchived: boolean;
  owner: UserModel;
  members: UserModel[];
}
