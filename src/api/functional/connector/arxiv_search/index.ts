/**
 * @packageDocumentation
 * @module api.functional.connector.arxiv_search
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { IConnector } from "../../../structures/common/IConnector";

/**
 * 입력한 검색 조건을 기반으로 아카이브에서 논문을 검색합니다.
 *
 * @summary 아카이브 논문 검색
 * @param input 아카이브 논문 검색 조건
 * @returns 검색 조건을 기반으로 아카이브에서 검색된 논문 목록.
 * @tag Arxiv 학술자료 사이트
 *
 * @controller ArxivSearchController.search
 * @path POST /connector/arxiv-search
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function search(
  connection: IConnection,
  input: search.Input,
): Promise<search.Output> {
  return !!connection.simulate
    ? search.simulate(connection, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...search.METADATA,
          path: search.path(),
        },
        input,
      );
}
export namespace search {
  export type Input = Primitive<IConnector.ISearchInput>;
  export type Output = Primitive<IConnector.ISearchOutput>;

  export const METADATA = {
    method: "POST",
    path: "/connector/arxiv-search",
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

  export const path = () => "/connector/arxiv-search";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Resolved<Primitive<IConnector.ISearchOutput>> =>
    typia.random<Primitive<IConnector.ISearchOutput>>(g);
  export const simulate = (
    connection: IConnection,
    input: search.Input,
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
