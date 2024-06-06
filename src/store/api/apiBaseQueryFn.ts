import { BaseQueryFn, FetchArgs, FetchBaseQueryMeta } from "@reduxjs/toolkit/query/react";
import { IApiError } from "@interfaces/index";

export type MyBaseQueryFn = BaseQueryFn<string | FetchArgs, unknown, IApiError, object, FetchBaseQueryMeta>;
