export const providesList = <
  R extends { id: number | string }[],
  T extends string,
>(
  resultsWithIds: R | undefined,
  tagType: T,
) => {
  return resultsWithIds
    ? [
        { id: "LIST", type: tagType },
        ...resultsWithIds.map(({ id }) => ({ id, type: tagType })),
      ]
    : [{ id: "LIST", type: tagType }];
};
