import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
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
const defaultOptions = {} as const;
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
  clearCookies: Scalars["Boolean"]["output"];
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
  file?: InputMaybe<Scalars["Upload"]["input"]>;
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
  file?: InputMaybe<Scalars["Upload"]["input"]>;
  input: UpdateProjectInput;
  projectId: Scalars["String"]["input"];
};

export type MutationUpdateTaskArgs = {
  input: UpdateTaskInput;
  taskId: Scalars["String"]["input"];
};

export type MutationUploadTaskFileArgs = {
  file?: InputMaybe<Scalars["Upload"]["input"]>;
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
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
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
  isArchived?: InputMaybe<Scalars["Boolean"]["input"]>;
  memberIds?: InputMaybe<Scalars["String"]["input"]>;
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

export type UserFragment = {
  __typename?: "UserModel";
  id: string;
  username: string;
  email: string;
  imageUrl?: string | null;
  firstName?: string | null;
  lastName?: string | null;
};

export type ProjectFragment = {
  __typename?: "ProjectModel";
  id: string;
  title: string;
  description?: string | null;
  imageUrl?: string | null;
  isArchived: boolean;
  members: Array<{
    __typename?: "UserModel";
    id: string;
    username: string;
    email: string;
    imageUrl?: string | null;
    firstName?: string | null;
    lastName?: string | null;
  }>;
  user: {
    __typename?: "UserModel";
    id: string;
    username: string;
    email: string;
    imageUrl?: string | null;
    firstName?: string | null;
    lastName?: string | null;
  };
};

export type GetAllProjectsQueryVariables = Exact<{
  filters: ProjectFiltersInput;
}>;

export type GetAllProjectsQuery = {
  __typename?: "Query";
  getAllProjects: Array<{
    __typename?: "ProjectModel";
    id: string;
    title: string;
    description?: string | null;
    imageUrl?: string | null;
    isArchived: boolean;
    members: Array<{
      __typename?: "UserModel";
      id: string;
      username: string;
      email: string;
      imageUrl?: string | null;
      firstName?: string | null;
      lastName?: string | null;
    }>;
    user: {
      __typename?: "UserModel";
      id: string;
      username: string;
      email: string;
      imageUrl?: string | null;
      firstName?: string | null;
      lastName?: string | null;
    };
  }>;
};

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllUsersQuery = {
  __typename?: "Query";
  getAllUsers: Array<{
    __typename?: "UserModel";
    id: string;
    username: string;
    email: string;
    imageUrl?: string | null;
    firstName?: string | null;
    lastName?: string | null;
  }>;
};

export type ClearCookieMutationVariables = Exact<{ [key: string]: never }>;

export type ClearCookieMutation = {
  __typename?: "Mutation";
  clearCookies: boolean;
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

export type CreateProjectMutationVariables = Exact<{
  input: CreateProjectInput;
  file?: InputMaybe<Scalars["Upload"]["input"]>;
}>;

export type CreateProjectMutation = {
  __typename?: "Mutation";
  createProject: boolean;
};

export const UserFragmentDoc = gql`
  fragment User on UserModel {
    id
    username
    email
    imageUrl
    firstName
    lastName
  }
`;
export const ProjectFragmentDoc = gql`
  fragment Project on ProjectModel {
    id
    title
    description
    imageUrl
    isArchived
    members {
      ...User
    }
    user {
      ...User
    }
  }
  ${UserFragmentDoc}
`;
export const GetCurrentUserDocument = gql`
  query GetCurrentUser {
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

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentUserQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCurrentUserQuery,
    GetCurrentUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(
    GetCurrentUserDocument,
    options,
  );
}
export function useGetCurrentUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCurrentUserQuery,
    GetCurrentUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(
    GetCurrentUserDocument,
    options,
  );
}
export function useGetCurrentUserSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetCurrentUserQuery,
        GetCurrentUserQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetCurrentUserQuery,
    GetCurrentUserQueryVariables
  >(GetCurrentUserDocument, options);
}
export type GetCurrentUserQueryHookResult = ReturnType<
  typeof useGetCurrentUserQuery
>;
export type GetCurrentUserLazyQueryHookResult = ReturnType<
  typeof useGetCurrentUserLazyQuery
>;
export type GetCurrentUserSuspenseQueryHookResult = ReturnType<
  typeof useGetCurrentUserSuspenseQuery
>;
export type GetCurrentUserQueryResult = Apollo.QueryResult<
  GetCurrentUserQuery,
  GetCurrentUserQueryVariables
>;
export const GetAllProjectsDocument = gql`
  query GetAllProjects($filters: ProjectFiltersInput!) {
    getAllProjects(filters: $filters) {
      ...Project
    }
  }
  ${ProjectFragmentDoc}
`;

/**
 * __useGetAllProjectsQuery__
 *
 * To run a query within a React component, call `useGetAllProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProjectsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useGetAllProjectsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetAllProjectsQuery,
    GetAllProjectsQueryVariables
  > &
    (
      | { variables: GetAllProjectsQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllProjectsQuery, GetAllProjectsQueryVariables>(
    GetAllProjectsDocument,
    options,
  );
}
export function useGetAllProjectsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllProjectsQuery,
    GetAllProjectsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllProjectsQuery, GetAllProjectsQueryVariables>(
    GetAllProjectsDocument,
    options,
  );
}
export function useGetAllProjectsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetAllProjectsQuery,
        GetAllProjectsQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetAllProjectsQuery,
    GetAllProjectsQueryVariables
  >(GetAllProjectsDocument, options);
}
export type GetAllProjectsQueryHookResult = ReturnType<
  typeof useGetAllProjectsQuery
>;
export type GetAllProjectsLazyQueryHookResult = ReturnType<
  typeof useGetAllProjectsLazyQuery
>;
export type GetAllProjectsSuspenseQueryHookResult = ReturnType<
  typeof useGetAllProjectsSuspenseQuery
>;
export type GetAllProjectsQueryResult = Apollo.QueryResult<
  GetAllProjectsQuery,
  GetAllProjectsQueryVariables
>;
export const GetAllUsersDocument = gql`
  query GetAllUsers {
    getAllUsers {
      ...User
    }
  }
  ${UserFragmentDoc}
`;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllUsersQuery,
    GetAllUsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(
    GetAllUsersDocument,
    options,
  );
}
export function useGetAllUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllUsersQuery,
    GetAllUsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(
    GetAllUsersDocument,
    options,
  );
}
export function useGetAllUsersSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetAllUsersQuery,
        GetAllUsersQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(
    GetAllUsersDocument,
    options,
  );
}
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<
  typeof useGetAllUsersLazyQuery
>;
export type GetAllUsersSuspenseQueryHookResult = ReturnType<
  typeof useGetAllUsersSuspenseQuery
>;
export type GetAllUsersQueryResult = Apollo.QueryResult<
  GetAllUsersQuery,
  GetAllUsersQueryVariables
>;
export const ClearCookieDocument = gql`
  mutation ClearCookie {
    clearCookies
  }
`;
export type ClearCookieMutationFn = Apollo.MutationFunction<
  ClearCookieMutation,
  ClearCookieMutationVariables
>;

/**
 * __useClearCookieMutation__
 *
 * To run a mutation, you first call `useClearCookieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClearCookieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clearCookieMutation, { data, loading, error }] = useClearCookieMutation({
 *   variables: {
 *   },
 * });
 */
export function useClearCookieMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ClearCookieMutation,
    ClearCookieMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ClearCookieMutation, ClearCookieMutationVariables>(
    ClearCookieDocument,
    options,
  );
}
export type ClearCookieMutationHookResult = ReturnType<
  typeof useClearCookieMutation
>;
export type ClearCookieMutationResult =
  Apollo.MutationResult<ClearCookieMutation>;
export type ClearCookieMutationOptions = Apollo.BaseMutationOptions<
  ClearCookieMutation,
  ClearCookieMutationVariables
>;
export const SignInDocument = gql`
  mutation SignIn($input: SignInInput!) {
    signIn(input: $input)
  }
`;
export type SignInMutationFn = Apollo.MutationFunction<
  SignInMutation,
  SignInMutationVariables
>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignInMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignInMutation,
    SignInMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignInMutation, SignInMutationVariables>(
    SignInDocument,
    options,
  );
}
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<
  SignInMutation,
  SignInMutationVariables
>;
export const SignOutDocument = gql`
  mutation SignOut {
    signOut
  }
`;
export type SignOutMutationFn = Apollo.MutationFunction<
  SignOutMutation,
  SignOutMutationVariables
>;

/**
 * __useSignOutMutation__
 *
 * To run a mutation, you first call `useSignOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signOutMutation, { data, loading, error }] = useSignOutMutation({
 *   variables: {
 *   },
 * });
 */
export function useSignOutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignOutMutation,
    SignOutMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignOutMutation, SignOutMutationVariables>(
    SignOutDocument,
    options,
  );
}
export type SignOutMutationHookResult = ReturnType<typeof useSignOutMutation>;
export type SignOutMutationResult = Apollo.MutationResult<SignOutMutation>;
export type SignOutMutationOptions = Apollo.BaseMutationOptions<
  SignOutMutation,
  SignOutMutationVariables
>;
export const SignUpDocument = gql`
  mutation SignUp($input: SignUpInput!, $file: Upload) {
    signUp(input: $input, file: $file)
  }
`;
export type SignUpMutationFn = Apollo.MutationFunction<
  SignUpMutation,
  SignUpMutationVariables
>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      input: // value for 'input'
 *      file: // value for 'file'
 *   },
 * });
 */
export function useSignUpMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignUpMutation,
    SignUpMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(
    SignUpDocument,
    options,
  );
}
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<
  SignUpMutation,
  SignUpMutationVariables
>;
export const CreateProjectDocument = gql`
  mutation CreateProject($input: CreateProjectInput!, $file: Upload) {
    createProject(input: $input, file: $file)
  }
`;
export type CreateProjectMutationFn = Apollo.MutationFunction<
  CreateProjectMutation,
  CreateProjectMutationVariables
>;

/**
 * __useCreateProjectMutation__
 *
 * To run a mutation, you first call `useCreateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectMutation, { data, loading, error }] = useCreateProjectMutation({
 *   variables: {
 *      input: // value for 'input'
 *      file: // value for 'file'
 *   },
 * });
 */
export function useCreateProjectMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateProjectMutation,
    CreateProjectMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateProjectMutation,
    CreateProjectMutationVariables
  >(CreateProjectDocument, options);
}
export type CreateProjectMutationHookResult = ReturnType<
  typeof useCreateProjectMutation
>;
export type CreateProjectMutationResult =
  Apollo.MutationResult<CreateProjectMutation>;
export type CreateProjectMutationOptions = Apollo.BaseMutationOptions<
  CreateProjectMutation,
  CreateProjectMutationVariables
>;
