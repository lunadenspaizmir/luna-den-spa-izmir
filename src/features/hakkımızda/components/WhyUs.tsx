import { ClipboardCheck, ShieldCheck, Sparkles } from "lucide-react";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const reasons = [
  {
    title:
      "Luna Den Spa olarak İzmir şubelerimizde misafir memnuniyeti için kalite standartlarımızı en üst seviyede tutuyoruz",
    icon: Sparkles,
  },
  {
    title:
      "İzmir masaj salonu deneyimi için alınması gereken tüm tedbirleri alıyor, alanında uzman eğitimli masaj terapistleri ile çalışıyoruz",
    icon: ShieldCheck,
  },
  {
    title:
      "Kolay iletişim için ilgili İzmir şubelerimizdeki WhatsApp ve telefon numaraları üzerinden randevunuzu kolaylıkla oluşturabilirsiniz",
    icon: ClipboardCheck,
  },
];

export function WhyUs() {
  return (
    <Section className="bg-secondary/40">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Badge
            variant="outline"
            className="h-11 rounded-full bg-background px-5 text-sm"
          >
            İzmir’de Neden Luna Den Spa?
          </Badge>

          <h2 className="mt-5 text-3xl font-semibold leading-tight text-foreground md:text-5xl">
            İzmir şubelerimizde her detayında konfor, hijyen ve profesyonellik
          </h2>

          <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">
            İzmir’de masajları, farklı ihtiyaçlara göre vücut ve yüz bakımları,
            vücut maskesi seçenekleri, özel içeriklerle hazırlanan banyo
            terapileri ve bu rahatlatıcı deneyimi sevdiklerinizle birlikte
            yaşamanızı sağlayan çift kişilik paketler bunlardan sadece bazıları.
          </p>
        </div>

        <Separator className="my-10" />

        <div className="grid gap-4 md:grid-cols-3">
          {reasons.map((reason) => (
            <Card key={reason.title} className="rounded-lg">
              <CardHeader>
                <div className="mb-3 flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <reason.icon className="size-5" />
                </div>
                <CardTitle className="leading-snug">{reason.title}</CardTitle>
                <CardDescription className="leading-6">
                  İzmir’deki Luna Den Spa deneyiminin sürdürülebilir ve güven
                  veren standartlarla ilerlemesi için her adımı özenle
                  planlıyoruz.
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
