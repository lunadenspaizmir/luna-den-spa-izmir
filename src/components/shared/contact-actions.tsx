import { MapPin, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getBranchConversionProps, primaryBranch } from "@/data/branches";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { createWhatsAppUrl } from "@/lib/whatsapp";

type Tone = "default" | "dark";

type ActionProps = Readonly<{
  /** Google Ads dönüşümünde raporlanan tıklama konumu. */
  location: string;
  label: string;
  tone?: Tone;
  message?: string;
  className?: string;
}>;

const baseButton = "h-12 rounded-full px-7 text-sm";

/** WhatsApp randevu butonu — hazır mesajla sohbeti açar. */
export function WhatsAppButton({
  location,
  label,
  tone = "default",
  message,
  className,
}: ActionProps) {
  return (
    <Button
      asChild
      className={cn(
        baseButton,
        tone === "dark" &&
          "bg-hero-foreground text-primary [a]:hover:bg-secondary",
        className,
      )}
    >
      <a
        href={createWhatsAppUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
        {...getBranchConversionProps(primaryBranch.slug, "whatsapp", location)}
      >
        <MessageCircle className="size-4" />
        {label}
      </a>
    </Button>
  );
}

/** Telefon butonu — outline; koyu zeminlerde açık kenarlıklı. */
export function CallButton({
  location,
  label,
  tone = "default",
  className,
}: Omit<ActionProps, "message">) {
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        baseButton,
        tone === "dark"
          ? "border-on-dark-border bg-transparent text-hero-foreground hover:bg-hero-foreground/10 hover:text-hero-foreground"
          : "border-primary/30 bg-transparent hover:border-primary/50 hover:bg-secondary/60",
        className,
      )}
    >
      <a
        href={siteConfig.phone.href}
        {...getBranchConversionProps(primaryBranch.slug, "phone", location)}
      >
        <Phone className="size-4" />
        {label}
      </a>
    </Button>
  );
}

/** Yol tarifi butonu. */
export function DirectionsButton({
  label,
  tone = "default",
  className,
}: Readonly<{ label: string; tone?: Tone; className?: string }>) {
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        baseButton,
        tone === "dark"
          ? "border-on-dark-border bg-transparent text-hero-foreground hover:bg-hero-foreground/10 hover:text-hero-foreground"
          : "border-primary/30 bg-transparent hover:border-primary/50 hover:bg-secondary/60",
        className,
      )}
    >
      <a href={siteConfig.directionsUrl} target="_blank" rel="noreferrer">
        <MapPin className="size-4" />
        {label}
      </a>
    </Button>
  );
}
