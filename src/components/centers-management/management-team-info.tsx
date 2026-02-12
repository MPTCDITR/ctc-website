import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { motion } from "framer-motion";
import TextElement from "@/components/text-element/TextElement";

interface TeamMember {
  title: string;
  name: string;
  role: string;
  phoneNumber?: string;
  email?: string;
}

interface TeamTableProps {
  title: string;
  description: string;
  members: TeamMember[];
  showPhone?: boolean;
  translations: Record<string, string>;
}

//TODO: cleanup this function, when we valid real data from ctc, we will remove this function
const isPlaceholder = (value: string | undefined) => {
  if (!value) return true;
  const placeholders = [
    "Name",
    "ហោ  ប្រុស",
    "ម៉ូនី ស្រែ",
    "078 447 474",
    "០៧៨ ៤៤៧ ៤៧៤",
    "example@gmail.com",
  ];
  return placeholders.includes(value.trim());
};

function TeamTable({
  title,
  description,
  members,
  showPhone = false,
  translations,
}: TeamTableProps) {
  const t = (key: string) => translations[key] || key;

  return (
    <Card>
      <CardHeader>
        <h3 className="text-3xl font-bold text-primary">{title}</h3>
        <TextElement variant="paragraph">{description}</TextElement>
      </CardHeader>
      <CardContent>
        <Table className="text-lg">
          <TableHeader>
            <TableRow className="[&>*]:text-primary [&>*]:font-medium">
              <TableHead>{t("ctc.teaminfo.title")}</TableHead>
              <TableHead>{t("ctc.teaminfo.name")}</TableHead>
              <TableHead>{t("ctc.teaminfo.role")}</TableHead>
              {showPhone && (
                <TableHead>{t("ctc.teaminfo.phoneNumber")}</TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.length > 0 ? (
              members.map((member, index) => (
                <TableRow key={index}>
                  <TableCell>{member.title}</TableCell>
                  <TableCell>
                    {isPlaceholder(member.name) ? "-" : member.name}
                  </TableCell>
                  <TableCell>{member.role}</TableCell>
                  {showPhone && (
                    <TableCell>
                      {isPlaceholder(member.phoneNumber)
                        ? "-"
                        : member.phoneNumber}
                    </TableCell>
                  )}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={showPhone ? 4 : 3} className="text-center">
                  No team members available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export interface CenterTeamInfoProps {
  centerName: string;
  centerDescription: string;
  contact: {
    address: string;
    mapUrl?: string;
  };
  facilities: string[];
  teamManagementTitle: string;
  teamOperationTitle: string;
  teamManagementDescription: string;
  teamOperationDescription: string;
  managementTeam: TeamMember[];
  operationTeam: TeamMember[];
  translations: Record<string, string>;
}

export function CenterTeamInfo({
  centerName,
  centerDescription,
  contact,
  facilities,
  teamManagementTitle,
  teamOperationTitle,
  teamManagementDescription,
  teamOperationDescription,
  managementTeam,
  operationTeam,
  translations,
}: CenterTeamInfoProps) {
  const t = (key: string) => translations[key] || key;

  return (
    <div className="container py-12 space-y-24">
      <motion.section
        className="space-y-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="text-center space-y-4">
          <TextElement variant="heading">{centerName}</TextElement>
          <TextElement variant="paragraph">{centerDescription}</TextElement>
        </div>
        <Card>
          <CardHeader>
            <h3 className="text-3xl font-bold text-primary">
              {t("ctc.centerinfo.title")}
            </h3>
            <TextElement variant="body" className="max-w-8xl">
              {t("home.service.description")}
            </TextElement>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h4 className="text-2xl font-semibold text-primary">
                  {t("ctc.centerinfo.contact")}
                </h4>
                <div className="flex items-start gap-4 text-lg text-muted-foreground group">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <p className="leading-relaxed">{contact.address}</p>
                    {contact.mapUrl && (
                      <a
                        href={contact.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-secondary font-medium hover:underline group/link"
                      >
                        {t("ctc.centerinfo.viewmap")}
                        <span className="ml-1 inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                          →
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h4 className="text-2xl font-semibold text-primary">
                  {t("ctc.centerinfo.facilities")}
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {facilities.map((facility) => (
                    <li
                      key={facility}
                      className="flex items-center gap-3 text-lg text-muted-foreground bg-accent/5 p-3 rounded-lg border border-accent/10 hover:border-secondary/30 transition-colors duration-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      {facility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <TeamTable
          title={teamManagementTitle}
          description={teamManagementDescription}
          members={managementTeam}
          translations={translations}
        />

        <TeamTable
          title={teamOperationTitle}
          description={teamOperationDescription}
          members={operationTeam}
          showPhone={true}
          translations={translations}
        />
      </motion.section>
    </div>
  );
}
