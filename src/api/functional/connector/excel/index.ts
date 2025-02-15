/**
 * @packageDocumentation
 * @module api.functional.connector.excel
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { IExcel } from "../../../structures/connector/excel/IExcel";

export * as worksheet from "./worksheet";
export * as rows from "./rows";

/**
 * 입력된 파일 정보를 바탕으로 해당 엑셀 파일의 내용을 가져옵니다.
 *
 * @summary 엑셀 파일 안의 내용 가져오기
 * @param input 내용을 가져올 엑셀 파일 정보
 * @tag Excel 엑셀 파일
 *
 * @controller ExcelController.read
 * @path POST /connector/excel/read
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function read(
  connection: IConnection,
  input: read.Input,
): Promise<read.Output> {
  return !!connection.simulate
    ? read.simulate(connection, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...read.METADATA,
          path: read.path(),
        },
        input,
      );
}
export namespace read {
  export type Input = Primitive<IExcel.IReadExcelInput>;
  export type Output = Primitive<IExcel.IReadExcelOutput>;

  export const METADATA = {
    method: "POST",
    path: "/connector/excel/read",
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

  export const path = () => "/connector/excel/read";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Resolved<Primitive<IExcel.IReadExcelOutput>> =>
    typia.random<Primitive<IExcel.IReadExcelOutput>>(g);
  export const simulate = (
    connection: IConnection,
    input: read.Input,
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
