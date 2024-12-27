import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
interface CenterTeamInfoProps {
  centerName: string;
  centerDescription: string;
  teamManagementTitle: string;
  teamOperationTitle: string;
  teamManagementDescription: string;
  teamOperationDescription: string;
  managementTeam: Array<{
    title: string;
    name: string;
    role: string;
    phoneNumber: string;
    email: string;
  }>;
  operationTeam: Array<{
    title: string;
    name: string;
    role: string;
    phoneNumber: string;
    email: string;
  }>;
  translations: Record<string, string>;
  children?: React.ReactNode;
}

export function CenterTeamInfo({
  centerName,
  centerDescription,
  teamManagementTitle,
  teamOperationTitle,
  teamManagementDescription,
  teamOperationDescription,
  managementTeam,
  operationTeam,
  translations,
  children,
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
              Center Information
            </h3>
            <TextElement variant="body" className="max-w-8xl">
              {t("home.service.description")}
            </TextElement>
          </CardHeader>
          <CardContent>
            <div className="prose prose-h2:mt-0 prose-neutral dark:prose-invert max-w-none mx-auto text-lg">
              {children}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h3 className="text-3xl font-bold text-primary">
              {teamManagementTitle}
            </h3>
            <TextElement variant="paragraph">
              {teamManagementDescription}
            </TextElement>
          </CardHeader>
          <CardContent>
            <Table className="text-lg">
              <TableHeader>
                <TableRow className="[&>*]:text-primary [&>*]:font-medium">
                  <TableHead>{t("ctc.teaminfo.title")}</TableHead>
                  {/* <TableHead>{t("ctc.teaminfo.name")}</TableHead> */}
                  <TableHead>{t("ctc.teaminfo.role")}</TableHead>
                  {/* <TableHead>{t("ctc.teaminfo.phoneNumber")}</TableHead>
                  <TableHead>{t("ctc.teaminfo.email")}</TableHead> */}
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.isArray(managementTeam) && managementTeam.length > 0 ? (
                  managementTeam.map((member, index) => (
                    <TableRow key={member.name}>
                      <TableCell>{member.title}</TableCell>
                      {/* <TableCell>{member.name}</TableCell> */}
                      <TableCell>{member.role}</TableCell>
                      {/* <TableCell>{member.phoneNumber}</TableCell>
                      <TableCell>{member.email}</TableCell> */}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center">
                      No management team members available.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h3 className="text-3xl font-bold text-primary">
              {teamOperationTitle}
            </h3>
            <TextElement variant="paragraph">
              {teamOperationDescription}
            </TextElement>
          </CardHeader>
          <CardContent>
            <Table className="text-lg">
              <TableHeader>
                <TableRow className="[&>*]:text-primary [&>*]:font-medium">
                  <TableHead>{t("ctc.teaminfo.title")}</TableHead>
                  <TableHead>{t("ctc.teaminfo.name")}</TableHead>
                  <TableHead>{t("ctc.teaminfo.role")}</TableHead>
                  <TableHead>{t("ctc.teaminfo.phoneNumber")}</TableHead>
                  {/* <TableHead>{t("ctc.teaminfo.email")}</TableHead> */}
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.isArray(operationTeam) && operationTeam.length > 0 ? (
                  operationTeam.map((member, index) => (
                    <TableRow key={member.name}>
                      <TableCell>{member.title}</TableCell>
                      <TableCell>{member.name}</TableCell>
                      <TableCell>{member.role}</TableCell>
                      <TableCell>{member.phoneNumber}</TableCell>
                      {/* <TableCell>{member.email}</TableCell> */}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center">
                      No management team members available.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
}
