export const getPaginationConfig = (
  orderBy: string,
  order?: "asc" | "desc"
): Partial<Config> => ({
  defaultOrder: order ?? "asc",
  defaultOrderBy: orderBy,
});

export const getDefaultCriteria = (
  paginationConfig: Partial<Config>
): QueryParams => {
  return {
    order: paginationConfig.defaultOrder as PaginationOrder,
    orderBy: paginationConfig.defaultOrderBy ?? "",
    searchValue: "",
  };
};

export const setCriteriaParamsBySearchParams = (searchParams: SearchParams) => {
  const currentParams: QueryParams = {
    ...searchParams,
    searchValue: searchParams.search,
  };
  if ("search" in currentParams) delete currentParams.search;
  return currentParams;
};
