/**
 * @packageDocumentation
 * @module api.functional.connector.typeform.forms
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { ITypeform } from "../../../../structures/connector/typeform/ITypeform";

export * as fields from "./fields";

/**
 * 랭킹, 드롭다운, 다중선택 질문의 옵션을 업데이트합니다.
 *
 * @summary 타입폼 폼 필드 옵션 업데이트.
 * @param input 업데이트할 폼 필드명과 업데이트 할 값.
 * @tag Typeform
 * @internal
 *
 * @controller TypeformController.updateFormFieldValue
 * @path PUT /connector/typeform/forms/:formId
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function updateFormFieldValue(
  connection: IConnection,
  formId: string,
  input: updateFormFieldValue.Input,
): Promise<updateFormFieldValue.Output> {
  return !!connection.simulate
    ? updateFormFieldValue.simulate(connection, formId, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...updateFormFieldValue.METADATA,
          path: updateFormFieldValue.path(formId),
        },
        input,
      );
}
export namespace updateFormFieldValue {
  export type Input = Primitive<ITypeform.IUpdateFormFieldValueInput>;
  export type Output = Primitive<ITypeform.IUpdateFormFieldValueOutput>;

  export const METADATA = {
    method: "PUT",
    path: "/connector/typeform/forms/:formId",
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

  export const path = (formId: string) =>
    `/connector/typeform/forms/${encodeURIComponent(formId ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Resolved<Primitive<ITypeform.IUpdateFormFieldValueOutput>> =>
    typia.random<Primitive<ITypeform.IUpdateFormFieldValueOutput>>(g);
  export const simulate = (
    connection: IConnection,
    formId: string,
    input: updateFormFieldValue.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(formId),
      contentType: "application/json",
    });
    assert.param("formId")(() => typia.assert(formId));
    assert.body(() => typia.assert(input));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * 폼을 삭제합니다.
 *
 * @summary 타입폼 폼 삭제.
 * @param formId 삭제할 폼 ID.
 * @tag Typeform
 * @internal
 *
 * @controller TypeformController.deleteForm
 * @path DELETE /connector/typeform/forms/:formId
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function deleteForm(
  connection: IConnection,
  formId: string,
): Promise<void> {
  return !!connection.simulate
    ? deleteForm.simulate(connection, formId)
    : PlainFetcher.fetch(connection, {
        ...deleteForm.METADATA,
        path: deleteForm.path(formId),
      });
}
export namespace deleteForm {
  export const METADATA = {
    method: "DELETE",
    path: "/connector/typeform/forms/:formId",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (formId: string) =>
    `/connector/typeform/forms/${encodeURIComponent(formId ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Resolved<Primitive<void>> => typia.random<Primitive<void>>(g);
  export const simulate = (connection: IConnection, formId: string): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(formId),
      contentType: "application/json",
    });
    assert.param("formId")(() => typia.assert(formId));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
