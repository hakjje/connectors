/**
 * @packageDocumentation
 * @module api.functional.connector.google_sheet
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { IGoogleSheet } from "../../../structures/connector/google_sheet/IGoogleSheet";

export * as header from "./header";
export * as worksheet from "./worksheet";
export * as get_rows from "./get_rows";

/**
 * 구글 시트의 헤더 정보를 가져옵니다.
 *
 * @summary 구글 시트 헤더 정보 가져오기.
 * @param input 구글 시트 URL과 가져올 헤더 index.
 * @returns 구글 시트 헤더 정보.
 * @tag Google Sheet
 *
 * @controller GoogleSheetController.getHeaders
 * @path POST /connector/google-sheet
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getHeaders(
  connection: IConnection,
  input: getHeaders.Input,
): Promise<getHeaders.Output> {
  return !!connection.simulate
    ? getHeaders.simulate(connection, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getHeaders.METADATA,
          path: getHeaders.path(),
        },
        input,
      );
}
export namespace getHeaders {
  export type Input = Primitive<IGoogleSheet.IReadGoogleSheetHeadersInput>;
  export type Output = Primitive<IGoogleSheet.IReadGoogleSheetOutput>;

  export const METADATA = {
    method: "POST",
    path: "/connector/google-sheet",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = () => "/connector/google-sheet";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Resolved<Primitive<IGoogleSheet.IReadGoogleSheetOutput>> =>
    typia.random<Primitive<IGoogleSheet.IReadGoogleSheetOutput>>(g);
  export const simulate = (
    connection: IConnection,
    input: getHeaders.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(),
      contentType: "application/json",
    });
    assert.body(() => typia.assert(input));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * 구글 시트에 권한을 부여합니다.
 *
 * @summary 구글 시트 권한 부여.
 * @param input 권한 부여를 위한 정보.
 * @tag Google Sheet
 *
 * @controller GoogleSheetController.permission
 * @path POST /connector/google-sheet/permission
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function permission(
  connection: IConnection,
  input: permission.Input,
): Promise<void> {
  return !!connection.simulate
    ? permission.simulate(connection, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...permission.METADATA,
          path: permission.path(),
        },
        input,
      );
}
export namespace permission {
  export type Input = Primitive<IGoogleSheet.IPermissionInput>;

  export const METADATA = {
    method: "POST",
    path: "/connector/google-sheet/permission",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = () => "/connector/google-sheet/permission";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Resolved<Primitive<void>> => typia.random<Primitive<void>>(g);
  export const simulate = (
    connection: IConnection,
    input: permission.Input,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(),
      contentType: "application/json",
    });
    assert.body(() => typia.assert(input));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
