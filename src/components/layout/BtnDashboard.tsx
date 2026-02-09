"use client";

import { LinkButton } from "../ui/link-button";

interface BtnDashboardProps {
  translations: Record<string, string>;
}

export function BtnDashboard({ translations }: BtnDashboardProps) {
  const t = (key: string) => translations[key] || key;
  return (
    <div className="lg:container px-3 lg:px-2 flex py-4">
      <LinkButton href="https://dashboard-test.domnerka.site/" className="h-6">
       {t("nav.login")}
      </LinkButton>
    </div>
  );
}
export default BtnDashboard;
