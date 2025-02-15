/**
 * @packageDocumentation
 * @module api.functional.connector.naver.cafe
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { INaver } from "../../../../structures/connector/naver/INaver";

/**
 * 네이버 카페 컨텐츠를 검색합니다.
 *
 * @summary 네이버 카페 검색
 * @param input 네이버 카페 검색을 위한 조건
 * @tag Naver 네이버 포털 사이트
 *
 * @controller NaverController.cafeList
 * @path POST /connector/naver/cafe
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function cafeList(
  connection: IConnection,
  input: cafeList.Input,
): Promise<cafeList.Output> {
  return !!connection.simulate
    ? cafeList.simulate(connection, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...cafeList.METADATA,
          path: cafeList.path(),
        },
        input,
      );
}
export namespace cafeList {
  export type Input = Primitive<INaver.INaverKeywordInput>;
  export type Output = Primitive<INaver.ICafeNaverOutput>;

  export const METADATA = {
    method: "POST",
    path: "/connector/naver/cafe",
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

  export const path = () => "/connector/naver/cafe";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Resolved<Primitive<INaver.ICafeNaverOutput>> =>
    typia.random<Primitive<INaver.ICafeNaverOutput>>(g);
  export const simulate = (
    connection: IConnection,
    input: cafeList.Input,
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
