/**
 * @packageDocumentation
 * @module api.functional.connector.gmail.read_list
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { IGmail } from "../../../../structures/connector/gmail/IGmail";

/**
 * 메일 리스트를 가져옵니다.
 *
 * @summary GMAIL 리스트 가져오기.
 * @param input 메일 리스트를 가져오기 위한 정보.
 * @returns 메일 리스트.
 * @tag Gmail
 *
 * @controller GmailController.findEmails
 * @path POST /connector/gmail/read-list
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function findEmails(
  connection: IConnection,
  input: findEmails.Input,
): Promise<findEmails.Output> {
  return !!connection.simulate
    ? findEmails.simulate(connection, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...findEmails.METADATA,
          path: findEmails.path(),
        },
        input,
      );
}
export namespace findEmails {
  export type Input = Primitive<IGmail.IFindEmailListInput>;
  export type Output = Primitive<IGmail.IFindGmailListOutput>;

  export const METADATA = {
    method: "POST",
    path: "/connector/gmail/read-list",
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

  export const path = () => "/connector/gmail/read-list";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Resolved<Primitive<IGmail.IFindGmailListOutput>> =>
    typia.random<Primitive<IGmail.IFindGmailListOutput>>(g);
  export const simulate = (
    connection: IConnection,
    input: findEmails.Input,
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
