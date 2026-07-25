"use client";

import type { ComponentProps, MouseEvent } from "react";

import { reportCocosContactConversion } from "./cocos-contact-conversion";

type CocosContactLinkProps = ComponentProps<"a">;

/**
 * Cocos şubesindeki iletişim bağlantıları (WhatsApp / telefon) için ince
 * istemci sarmalayıcısı. Tıklamada Google Ads dönüşümünü gönderir; href/target
 * gibi özellikleri ve varsa mevcut onClick davranışını korur. preventDefault
 * kullanmaz, kullanıcı normal şekilde yönlendirilmeye devam eder.
 */
export function CocosContactLink({
  onClick,
  children,
  ...props
}: CocosContactLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    // Dönüşüm yalnızca gerçek tıklamada, tıklanan asıl <a> öğesi üzerinde
    // gönderilir; bu sayede event bubbling nedeniyle iki kez tetiklenmez.
    reportCocosContactConversion();
    onClick?.(event);
  }

  return (
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  );
}
