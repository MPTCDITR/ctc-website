import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { defaultLang } from "@/i18n/ui";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
  const centers = await getCollection("centers");
  const defaultCenters = centers.filter((center) =>
    center.slug.startsWith(defaultLang),
  );

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: defaultCenters.map((center) => ({
      name: center.data.name,
      description: center.data.description,
      managementTeam: {
        title: center.data.managementTeam.title,
        description: center.data.managementTeam.description,
        member: [
          center.data.managementTeam.member.title,
          center.data.managementTeam.member.name,
          center.data.managementTeam.member.role,
          center.data.managementTeam.member.phoneNumber,
          center.data.managementTeam.member.email,
        ],
      },
      operationTeam: {
        title: center.data.managementTeam.title,
        description: center.data.managementTeam.description,
        member: {
          title: center.data.managementTeam.member.title,
          name: center.data.managementTeam.member.name,
          role: center.data.managementTeam.member.role,
          phoneNumber: center.data.managementTeam.member.phoneNumber,
          email: center.data.managementTeam.member.email,
        },
      },
      link: `/center/centers-management/${center.slug.split("/").slice(1).join("/")}`,
    })),
  });
}
