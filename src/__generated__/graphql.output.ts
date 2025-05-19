import { baseApi } from "../shared/api";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  Upload: { input: any; output: any };
};

export type CreateProjectInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  memberIds: Array<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
};

export type CreateTaskInput = {
  assigneeIds?: InputMaybe<Array<Scalars["String"]["input"]>>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  endDate: Scalars["DateTime"]["input"];
  priority: TaskPriority;
  startDate: Scalars["DateTime"]["input"];
  state: TaskState;
  title: Scalars["String"]["input"];
};

export type Mutation = {
  __typename?: "Mutation";
  createProject: Scalars["Boolean"]["output"];
  createTask: Scalars["Boolean"]["output"];
  removeTaskFile: Scalars["Boolean"]["output"];
  signIn: Scalars["Boolean"]["output"];
  signOut: Scalars["Boolean"]["output"];
  signUp: Scalars["Boolean"]["output"];
  updateProject: Scalars["Boolean"]["output"];
  updateTask: Scalars["Boolean"]["output"];
  uploadTaskFile: Scalars["Boolean"]["output"];
};

export type MutationCreateProjectArgs = {
  file: Scalars["Upload"]["input"];
  input: CreateProjectInput;
};

export type MutationCreateTaskArgs = {
  input: CreateTaskInput;
  projectId: Scalars["String"]["input"];
};

export type MutationRemoveTaskFileArgs = {
  taskFileId: Scalars["String"]["input"];
};

export type MutationSignInArgs = {
  input: SignInInput;
};

export type MutationSignUpArgs = {
  file?: InputMaybe<Scalars["Upload"]["input"]>;
  input: SignUpInput;
};

export type MutationUpdateProjectArgs = {
  file: Scalars["Upload"]["input"];
  input: UpdateProjectInput;
  projectId: Scalars["String"]["input"];
};

export type MutationUpdateTaskArgs = {
  input: UpdateTaskInput;
  taskId: Scalars["String"]["input"];
};

export type MutationUploadTaskFileArgs = {
  file: Scalars["Upload"]["input"];
  taskId: Scalars["String"]["input"];
};

export type ProjectFiltersInput = {
  isArchived?: InputMaybe<Scalars["Boolean"]["input"]>;
  searchTerms?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProjectModel = {
  __typename?: "ProjectModel";
  createdAt: Scalars["DateTime"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  imageUrl?: Maybe<Scalars["String"]["output"]>;
  isArchived: Scalars["Boolean"]["output"];
  members: Array<UserModel>;
  title: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  user: UserModel;
};

export type Query = {
  __typename?: "Query";
  getAllProjects: Array<ProjectModel>;
  getAllTaskFiles: Array<TaskFileModel>;
  getAllTasks: Array<TaskModel>;
  getAllUsers: Array<UserModel>;
  getCurrentUser: UserModel;
  getProjectById: ProjectModel;
  getTaskById: TaskModel;
};

export type QueryGetAllProjectsArgs = {
  filters: ProjectFiltersInput;
};

export type QueryGetAllTaskFilesArgs = {
  taskId: Scalars["String"]["input"];
};

export type QueryGetAllTasksArgs = {
  filters: TaskFiltersInput;
  projectId: Scalars["String"]["input"];
};

export type QueryGetProjectByIdArgs = {
  projectId: Scalars["String"]["input"];
};

export type QueryGetTaskByIdArgs = {
  taskId: Scalars["String"]["input"];
};

export type SignInInput = {
  login: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type SignUpInput = {
  email: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  lastName: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  passwordConfirm: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
};

export type TaskFileModel = {
  __typename?: "TaskFileModel";
  fileName: Scalars["String"]["output"];
  fileType: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  size: Scalars["Float"]["output"];
  taskId: Scalars["ID"]["output"];
  url: Scalars["String"]["output"];
  user: UserModel;
};

export type TaskFiltersInput = {
  endDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  priority?: InputMaybe<TaskPriority>;
  searchTerms?: InputMaybe<Scalars["String"]["input"]>;
  startDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  state?: InputMaybe<TaskState>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type TaskModel = {
  __typename?: "TaskModel";
  assignees: Array<UserModel>;
  createdAt: Scalars["DateTime"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  endDate: Scalars["DateTime"]["output"];
  id: Scalars["ID"]["output"];
  isArchived: Scalars["Boolean"]["output"];
  priority: TaskPriority;
  projectId: Scalars["ID"]["output"];
  startDate: Scalars["DateTime"]["output"];
  state: TaskState;
  title: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  user: UserModel;
};

export enum TaskPriority {
  High = "HIGH",
  Low = "LOW",
  Medium = "MEDIUM",
}

export enum TaskState {
  Accepted = "ACCEPTED",
  Cancelled = "CANCELLED",
  Created = "CREATED",
  Done = "DONE",
  InProgress = "IN_PROGRESS",
}

export type UpdateProjectInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  isArchived?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  memberIds?: InputMaybe<Array<Scalars["String"]["input"]>>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateTaskInput = {
  assigneeIds?: InputMaybe<Array<Scalars["String"]["input"]>>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  endDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  isArchived?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  priority?: InputMaybe<TaskPriority>;
  startDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  state?: InputMaybe<TaskState>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserModel = {
  __typename?: "UserModel";
  createdAt: Scalars["DateTime"]["output"];
  email: Scalars["String"]["output"];
  firstName?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  imageUrl?: Maybe<Scalars["String"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
  updatedAt: Scalars["DateTime"]["output"];
  username: Scalars["String"]["output"];
};

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetCurrentUserQuery = {
  __typename?: "Query";
  getCurrentUser: {
    __typename?: "UserModel";
    id: string;
    username: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    imageUrl?: string | null;
  };
};

export type SignInMutationVariables = Exact<{
  input: SignInInput;
}>;

export type SignInMutation = { __typename?: "Mutation"; signIn: boolean };

export type SignOutMutationVariables = Exact<{ [key: string]: never }>;

export type SignOutMutation = { __typename?: "Mutation"; signOut: boolean };

export type SignUpMutationVariables = Exact<{
  input: SignUpInput;
  file?: InputMaybe<Scalars["Upload"]["input"]>;
}>;

export type SignUpMutation = { __typename?: "Mutation"; signUp: boolean };

export const GetCurrentUserDocument = `
    query getCurrentUser {
  getCurrentUser {
    id
    username
    email
    firstName
    lastName
    imageUrl
  }
}
    `;
export const SignInDocument = `
    mutation SignIn($input: SignInInput!) {
  signIn(input: $input)
}
    `;
export const SignOutDocument = `
    mutation SignOut {
  signOut
}
    `;
export const SignUpDocument = `
    mutation SignUp($input: SignUpInput!, $file: Upload) {
  signUp(input: $input, file: $file)
}
    `;

const injectedRtkApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCurrentUser: build.query<
      GetCurrentUserQuery,
      GetCurrentUserQueryVariables | void
    >({
      query: (variables) => ({ document: GetCurrentUserDocument, variables }),
    }),
    SignIn: build.mutation<SignInMutation, SignInMutationVariables>({
      query: (variables) => ({ document: SignInDocument, variables }),
    }),
    SignOut: build.mutation<SignOutMutation, SignOutMutationVariables | void>({
      query: (variables) => ({ document: SignOutDocument, variables }),
    }),
    SignUp: build.mutation<SignUpMutation, SignUpMutationVariables>({
      query: (variables) => ({ document: SignUpDocument, variables }),
    }),
  }),
});

export { injectedRtkApi as api };
export const {
  useGetCurrentUserQuery,
  useLazyGetCurrentUserQuery,
  useSignInMutation,
  useSignOutMutation,
  useSignUpMutation,
} = injectedRtkApi;
