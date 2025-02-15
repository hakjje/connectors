import { ISwaggerSchema } from "./ISwaggerSchema";
import { ISwaggerSecurityScheme } from "./ISwaggerSecurityScheme";

/**
 * Reusable components in Swagger.
 *
 * `ISwaggerComponents` is a data structure representing content of `components` object
 * in `swagger.json` file generated by Nestia. Note that, this is not an universal
 * structure, but a dedicated structure only for Nestia.
 *
 * @author Samchon
 */
export interface ISwaggerComponents {
  /**
   * An object to hold reusable DTO schemas.
   *
   * For reference, `nestia` stores every object and alias types as reusable DTO
   * schemas. The alias type means that defined by `type` keyword in TypeScript.
   */
  schemas?: Record<string, ISwaggerSchema>;

  /**
   * An object to hold reusable security schemes.
   *
   * This property be configured by user in `nestia.config.ts` file.
   */
  securitySchemes?: Record<string, ISwaggerSecurityScheme>;
}
