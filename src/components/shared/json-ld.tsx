type JsonLdPrimitive = string | number | boolean | null;
type JsonLdValue = JsonLdPrimitive | JsonLdObject | ReadonlyArray<JsonLdValue>;

export interface JsonLdObject {
  readonly [key: string]: JsonLdValue;
}

type JsonLdProps = Readonly<{
  data: JsonLdObject;
}>;

/** Arama motorları için schema.org yapısal verisi basar. */
export function JsonLd({ data }: JsonLdProps) {
  const serialized = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serialized }}
    />
  );
}
