/**
 * @packageDocumentation
 * @module api.functional.connector.rag.generate.sse
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { IRag } from "../../../../../structures/connector/rag/IRag";

/**
 * RAG 분석을 기반으로 스트리밍 채팅을 합니다.
 *
 * @summary RAG 기반 채팅(스트리밍).
 * @param input
 * @tag RAG
 * @internal
 *
 * @controller RagController.generate
 * @path POST /connector/rag/generate/sse
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function generate(
  connection: IConnection,
  input: generate.Input,
): Promise<generate.Output> {
  return !!connection.simulate
    ? generate.simulate(connection, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...generate.METADATA,
          path: generate.path(),
        },
        input,
      );
}
export namespace generate {
  export type Input = Primitive<IRag.IGenerateInput>;
  export type Output = Primitive<any>;

  export const METADATA = {
    method: "POST",
    path: "/connector/rag/generate/sse",
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

  export const path = () => "/connector/rag/generate/sse";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Resolved<Primitive<any>> => typia.random<Primitive<any>>(g);
  export const simulate = (
    connection: IConnection,
    input: generate.Input,
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
