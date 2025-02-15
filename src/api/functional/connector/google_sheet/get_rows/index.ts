/**
 * @packageDocumentation
 * @module api.functional.connector.google_sheet.get_rows
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { IGoogleSheet } from "../../../../structures/connector/google_sheet/IGoogleSheet";

/**
 * 구글 시트의 Row 정보를 가져옵니다.
 *
 * @summary 구글 시트 Row 정보 가져오기.
 * @returns 구글 시트 Row 정보.
 * @tag Google Sheet
 * @Todo determine api endpoint in later because not decided select options
 *
 * @controller GoogleSheetController.readRows
 * @path POST /connector/google-sheet/get-rows
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function readRows(
  connection: IConnection,
  input: readRows.Input,
): Promise<readRows.Output> {
  return !!connection.simulate
    ? readRows.simulate(connection, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...readRows.METADATA,
          path: readRows.path(),
        },
        input,
      );
}
export namespace readRows {
  export type Input = Primitive<IGoogleSheet.IReadGoogleSheetRowsInput>;
  export type Output = Primitive<IGoogleSheet.IReadGoogleSheetRowsOutput>;

  export const METADATA = {
    method: "POST",
    path: "/connector/google-sheet/get-rows",
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

  export const path = () => "/connector/google-sheet/get-rows";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Resolved<Primitive<IGoogleSheet.IReadGoogleSheetRowsOutput>> =>
    typia.random<Primitive<IGoogleSheet.IReadGoogleSheetRowsOutput>>(g);
  export const simulate = (
    connection: IConnection,
    input: readRows.Input,
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
