"use client";

import { Button } from "../ui/button";

interface BtnDashboardProps {
  translations: Record<string, string>;
}

export function BtnDashboard({ translations }: BtnDashboardProps) {
  const t = (key: string) => translations[key] || key;
  return (
    <div className="lg:container px-3 lg:px-2 flex py-4">
      <a href="https://dashboard-test.domnerka.site/" target="_blank">
        <Button className="bg-primary hover:hover:bg-secondary text-white">{t("nav.ctc")}</Button>
      </a>
    </div>
  );
}
export default BtnDashboard;
