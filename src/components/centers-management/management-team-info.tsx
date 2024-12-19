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

export function CenterTeamInfo({
  centerName,
  centerDescription,
  teamManagementTitle,
  teamOperationTitle,
  teamManagementDescription,
  teamOperationDescription,
  managementTeam,
  operationTeam,
}) {
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
                  <TableHead>Title</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Phone Number</TableHead>
                  <TableHead>Email</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.isArray(managementTeam) && managementTeam.length > 0 ? (
                  managementTeam.map((member, index) => (
                    <TableRow key={member.name}>
                      <TableCell>{member.title}</TableCell>
                      <TableCell>{member.name}</TableCell>
                      <TableCell>{member.role}</TableCell>
                      <TableCell>{member.phoneNumber}</TableCell>
                      <TableCell>{member.email}</TableCell>
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
                  <TableHead>Title</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Phone Number</TableHead>
                  <TableHead>Email</TableHead>
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
                      <TableCell>{member.email}</TableCell>
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