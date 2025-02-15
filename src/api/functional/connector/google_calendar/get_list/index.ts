/**
 * @packageDocumentation
 * @module api.functional.connector.google_calendar.get_list
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { ICommon } from "../../../../structures/connector/common/ISecretValue";
import type { IGoogleCalendar } from "../../../../structures/connector/google_calendar/IGoogleCalendar";

/**
 * 구글 캘린더 목록을 가져옵니다.
 *
 * @summary 구글 캘린더 목록 가져오기.
 * @returns 구글 캘린더 목록.
 * @tag Google Calendar
 *
 * @controller GoogleCalendarController.readCalenders
 * @path POST /connector/google-calendar/get-list
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function readCalenders(
  connection: IConnection,
  input: readCalenders.Input,
): Promise<readCalenders.Output> {
  return !!connection.simulate
    ? readCalenders.simulate(connection, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...readCalenders.METADATA,
          path: readCalenders.path(),
        },
        input,
      );
}
export namespace readCalenders {
  export type Input = Primitive<
    ICommon.ISecret<"google", ["https://www.googleapis.com/auth/calendar"]>
  >;
  export type Output = Primitive<Array<IGoogleCalendar.IGoogleCalendarOutput>>;

  export const METADATA = {
    method: "POST",
    path: "/connector/google-calendar/get-list",
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

  export const path = () => "/connector/google-calendar/get-list";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Resolved<Primitive<Array<IGoogleCalendar.IGoogleCalendarOutput>>> =>
    typia.random<Primitive<Array<IGoogleCalendar.IGoogleCalendarOutput>>>(g);
  export const simulate = (
    connection: IConnection,
    input: readCalenders.Input,
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
