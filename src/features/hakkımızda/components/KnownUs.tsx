import Image from "next/image";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function KnownUs() {
  return (
    <Section className="bg-background">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div>
            <Badge variant="outline" className="h-11 rounded-full px-5 text-sm">
              İzmir’de Luna Den Spa
            </Badge>

            <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-foreground md:text-5xl">
              İzmir’de lüksü ve dinginliği bir arada sunan özel spa deneyimi
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
              Lüksü ve dinginliği bir arada sunan Luna Den Spa, şehir hayatına
              incelikle düşünülmüş bir mola vermek isteyenleri İzmir
              şubelerinde bekliyor. İzmir’de hem medikal bakımlarıyla, hem
              doğal bakımlarıyla öne çıkan Luna Den Spa’da, misafirler için
              özel olarak hazırlanmış yağlarla yapılan masajların, taze
              ürünlerle uygulanan cilt ve vücut bakımlarının yanı sıra lüks ve
              geleneksel Türk hamamı hizmetini de deneyimleyebilirsiniz.
            </p>
          </div>

          <Card className="relative min-h-104 rounded-lg p-0">
            <CardContent className="relative min-h-104 overflow-hidden p-0">
              <Image
                src="/hakkimizda/hakkimizda-hakkimizda.webp"
                alt="Luna Den Spa hakkımızda görseli"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
