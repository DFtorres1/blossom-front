type QueryParams = {
  [k: string]: string | number | boolean;
};

type SearchParams = {
  limit: number;
  offset: number;
  order: "desc" | "asc";
  orderBy: string;
  search: string;
};

type FilterValues = {
  character: string;
  specie: string;
  name: string
};

type Config = {
  defaultOrder: PaginationOrder;
  defaultOrderBy: string;
  defaultSearchValue: string;
  defaultRowsPerPage: number;
  rowsPerPageOptions: number[];
  showLoading: boolean;
};

type PaginationOrder = "desc" | "asc";

type RoutesType = {
  id: string;
  exact?: boolean;
  path?: string;
  layout?: React.FC;
  // Disabled due to necessary any type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: any;
  routes?: RoutesType[];
};
