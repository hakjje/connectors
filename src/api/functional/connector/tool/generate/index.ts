/**
 * @packageDocumentation
 * @module api.functional.connector.tool.generate
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { ITool } from "../../../../structures/connector/tool/ITool";

/**
 * 툴을 사용합니다.
 *
 * @summary 툴 사용
 * @param id
 * @param input
 * @tag Tool
 *
 * @controller ToolController.generateTool
 * @path POST /connector/tool/:id/generate
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function generateTool(
  connection: IConnection,
  id: string,
  input: generateTool.Input,
): Promise<generateTool.Output> {
  return !!connection.simulate
    ? generateTool.simulate(connection, id, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...generateTool.METADATA,
          path: generateTool.path(id),
        },
        input,
      );
}
export namespace generateTool {
  export type Input = Primitive<ITool.IGenerateInput>;
  export type Output = Primitive<ITool.IGenerateOutput>;

  export const METADATA = {
    method: "POST",
    path: "/connector/tool/:id/generate",
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

  export const path = (id: string) =>
    `/connector/tool/${encodeURIComponent(id ?? "null")}/generate`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Resolved<Primitive<ITool.IGenerateOutput>> =>
    typia.random<Primitive<ITool.IGenerateOutput>>(g);
  export const simulate = (
    connection: IConnection,
    id: string,
    input: generateTool.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(id),
      contentType: "application/json",
    });
    assert.param("id")(() => typia.assert(id));
    assert.body(() => typia.assert(input));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
