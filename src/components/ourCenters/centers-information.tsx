"use client";

import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Search } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import TextElement from "@/components/text-element/TextElement";

const allCenters = [
  {
    name: "Phnom Penh Tech Hub",
    location: "Phnom Penh",
    address: "123 Norodom Blvd, Phnom Penh",
    phone: "+855 23 123 456",
    email: "phnompenh@ctc.com",
    description:
      "Our flagship center in the heart of Phnom Penh, offering a wide range of courses and state-of-the-art facilities.",
    courses: [
      "Web Development",
      "Data Science",
      "Mobile App Development",
      "Cybersecurity",
    ],
    facilities: [
      "Computer Lab",
      "Lecture Halls",
      "Innovation Space",
      "Library",
    ],
  },
  {
    name: "Siem Reap Innovation Lab",
    location: "Siem Reap",
    address: "456 Charles de Gaulle, Siem Reap",
    phone: "+855 63 123 456",
    email: "siemreap@ctc.com",
    description:
      "Focused on tourism technology and cultural preservation, our Siem Reap center bridges tradition and innovation.",
    courses: [
      "Digital Marketing",
      "Cultural Heritage Digitization",
      "Tourism Tech",
      "Blockchain for Heritage",
    ],
    facilities: [
      "VR Lab",
      "Digital Archive",
      "Coworking Space",
      "Seminar Rooms",
    ],
  },
  {
    name: "Battambang Rural Tech Center",
    location: "Battambang",
    address: "789 Road 5, Battambang",
    phone: "+855 53 123 456",
    email: "battambang@ctc.com",
    description:
      "Bringing technology education to rural areas, this center specializes in agricultural tech and rural development solutions.",
    courses: [
      "AgriTech",
      "Rural Entrepreneurship",
      "Sustainable Tech",
      "Community Informatics",
    ],
    facilities: [
      "AgriTech Lab",
      "Demonstration Farm",
      "Rural Innovation Hub",
      "Distance Learning Center",
    ],
  },
  {
    name: "Kampot Digital Skills Center",
    location: "Kampot",
    address: "101 Riverside Rd, Kampot",
    phone: "+855 33 123 456",
    email: "kampot@ctc.com",
    description:
      "Focusing on digital skills for the tourism and hospitality industry in the coastal region.",
    courses: [
      "Hospitality Tech",
      "Digital Photography",
      "E-commerce for Local Products",
      "Social Media Marketing",
    ],
    facilities: [
      "Photography Studio",
      "Culinary Tech Lab",
      "Digital Classroom",
      "Startup Incubator",
    ],
  },
  {
    name: "Sihanoukville Tech Innovation Hub",
    location: "Sihanoukville",
    address: "23 Beach Blvd, Sihanoukville",
    phone: "+855 34 123 456",
    email: "sihanoukville@ctc.com",
    description:
      "Specializing in marine technology and coastal development solutions.",
    courses: [
      "Marine Conservation Tech",
      "Port Management Systems",
      "Coastal Tourism Tech",
      "Renewable Energy Tech",
    ],
    facilities: [
      "Marine Tech Lab",
      "Simulation Center",
      "Eco-Innovation Space",
      "Oceanographic Data Center",
    ],
  },
  {
    name: "Koh Kong Eco-Tech Center",
    location: "Koh Kong",
    address: "45 Eco Park Road, Koh Kong",
    phone: "+855 35 123 456",
    email: "kohkong@ctc.com",
    description:
      "Dedicated to eco-friendly technologies and sustainable development practices.",
    courses: [
      "Eco-Tourism Tech",
      "Biodiversity Monitoring Systems",
      "Sustainable Energy Solutions",
      "Green Building Tech",
    ],
    facilities: [
      "Eco-Tech Lab",
      "Biodiversity Monitoring Station",
      "Renewable Energy Demonstration Site",
      "Green Building Showcase",
    ],
  },
  {
    name: "Kratie River Tech Institute",
    location: "Kratie",
    address: "67 Mekong Riverside, Kratie",
    phone: "+855 72 123 456",
    email: "kratie@ctc.com",
    description:
      "Focused on river ecosystem management and sustainable fishing technologies.",
    courses: [
      "Aquaculture Tech",
      "River Ecosystem Monitoring",
      "Sustainable Fishing Tech",
      "Water Quality Management",
    ],
    facilities: [
      "Aquatic Research Lab",
      "River Monitoring Station",
      "Fisheries Tech Center",
      "Environmental Data Hub",
    ],
  },
  {
    name: "Mondulkiri Indigenous Tech Center",
    location: "Mondulkiri",
    address: "89 Forest Edge Road, Sen Monorom",
    phone: "+855 73 123 456",
    email: "mondulkiri@ctc.com",
    description:
      "Empowering indigenous communities with technology while preserving traditional knowledge.",
    courses: [
      "Indigenous Knowledge Digitization",
      "Eco-Tourism Tech",
      "Forest Monitoring Systems",
      "Community-Based Tech Solutions",
    ],
    facilities: [
      "Cultural Preservation Lab",
      "Forest Tech Research Center",
      "Community Learning Hub",
      "Indigenous Innovation Space",
    ],
  },
  {
    name: "Preah Vihear Heritage Tech Lab",
    location: "Preah Vihear",
    address: "12 Temple View Road, Preah Vihear",
    phone: "+855 64 123 456",
    email: "preahvihear@ctc.com",
    description:
      "Combining cutting-edge technology with ancient heritage preservation techniques.",
    courses: [
      "Digital Archaeology",
      "Heritage Site Management Tech",
      "3D Modeling for Antiquities",
      "Cultural Tourism Innovation",
    ],
    facilities: [
      "3D Scanning Lab",
      "Virtual Reality Heritage Center",
      "Archaeological Data Processing Hub",
      "Cultural Innovation Workshop",
    ],
  },
  {
    name: "Takeo AgriTech Innovation Center",
    location: "Takeo",
    address: "34 Rice Paddy Lane, Takeo",
    phone: "+855 32 123 456",
    email: "takeo@ctc.com",
    description:
      "Advancing agricultural practices through technology and innovation.",
    courses: [
      "Precision Agriculture",
      "Crop Monitoring Systems",
      "AgriTech Entrepreneurship",
      "Smart Irrigation Technologies",
    ],
    facilities: [
      "Smart Farm Demonstration Plot",
      "Soil Analysis Lab",
      "Drone Technology Center",
      "AgriTech Startup Incubator",
    ],
  },
  {
    name: "Kampong Cham Mekong Tech Hub",
    location: "Kampong Cham",
    address: "56 Mekong Promenade, Kampong Cham",
    phone: "+855 41 123 456",
    email: "kampongcham@ctc.com",
    description:
      "Leveraging technology for Mekong region development and cross-border collaboration.",
    courses: [
      "Mekong Data Analytics",
      "Cross-Border E-Commerce",
      "Logistics Tech",
      "Regional Development Informatics",
    ],
    facilities: [
      "Mekong Research Center",
      "Cross-Border Tech Lab",
      "Logistics Simulation Room",
      "Regional Data Visualization Center",
    ],
  },
  {
    name: "Kep Marine Tech Research Center",
    location: "Kep",
    address: "78 Oceanfront Drive, Kep",
    phone: "+855 36 123 456",
    email: "kep@ctc.com",
    description:
      "Advancing marine science and coastal conservation through technology.",
    courses: [
      "Marine Biotechnology",
      "Coastal Ecosystem Monitoring",
      "Sustainable Fishing Tech",
      "Ocean Data Analytics",
    ],
    facilities: [
      "Marine Biotech Lab",
      "Coastal Monitoring Station",
      "Fisheries Innovation Center",
      "Oceanographic Data Processing Hub",
    ],
  },
  {
    name: "Kampong Thom Tonle Sap Tech Institute",
    location: "Kampong Thom",
    address: "90 Lakeside Avenue, Kampong Thom",
    phone: "+855 62 123 456",
    email: "kampongthom@ctc.com",
    description:
      "Focusing on Tonle Sap ecosystem management and sustainable livelihoods.",
    courses: [
      "Wetland Management Tech",
      "Floating Agriculture Systems",
      "Eco-Tourism Innovations",
      "Water Resource Informatics",
    ],
    facilities: [
      "Wetland Research Station",
      "Floating Tech Demonstration Site",
      "Eco-Tourism Innovation Lab",
      "Water Quality Monitoring Center",
    ],
  },
  {
    name: "Stung Treng Mekong Confluence Tech Center",
    location: "Stung Treng",
    address: "23 Confluence Point, Stung Treng",
    phone: "+855 74 123 456",
    email: "stungtreng@ctc.com",
    description:
      "Harnessing technology for sustainable development at the Mekong confluence.",
    courses: [
      "River Basin Management Tech",
      "Hydropower Impact Assessment",
      "Biodiversity Monitoring Systems",
      "Eco-Friendly Tourism Tech",
    ],
    facilities: [
      "River Basin Modeling Lab",
      "Environmental Impact Assessment Center",
      "Biodiversity Data Hub",
      "Sustainable Tourism Tech Incubator",
    ],
  },
  {
    name: "Pursat Cardamom Tech Innovation Hub",
    location: "Pursat",
    address: "45 Forest Edge Road, Pursat",
    phone: "+855 52 123 456",
    email: "pursat@ctc.com",
    description:
      "Promoting sustainable use of Cardamom forest resources through technological innovation.",
    courses: [
      "Forest Monitoring Tech",
      "Sustainable Harvesting Systems",
      "Eco-Product Development",
      "Conservation Informatics",
    ],
    facilities: [
      "Forest Tech Research Lab",
      "Sustainable Harvest Demonstration Site",
      "Eco-Product Innovation Center",
      "Conservation Data Processing Hub",
    ],
  },
  {
    name: "Svay Rieng Cross-Border Tech Center",
    location: "Svay Rieng",
    address: "67 Border Lane, Bavet",
    phone: "+855 44 123 456",
    email: "svayrieng@ctc.com",
    description:
      "Facilitating cross-border trade and collaboration through technology.",
    courses: [
      "Cross-Border E-Commerce",
      "Digital Customs Solutions",
      "Supply Chain Tech",
      "International Business Informatics",
    ],
    facilities: [
      "Cross-Border Tech Simulation Lab",
      "E-Commerce Innovation Hub",
      "Digital Customs Training Center",
      "International Trade Data Center",
    ],
  },
];

interface CenterInfoProps {
  translations: Record<string, string>;
}

export function CentersInformation({ translations }: CenterInfoProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCenters = allCenters.filter(
    (center) =>
      center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      center.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      center.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const t = (key: string) => translations[key] || key;

  return (
    <div className="container py-12 space-y-4">
      <motion.h1
        className="text-4xl font-bold text-start text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("our.ctc.allinfo.title")}
      </motion.h1>
      <motion.p
        className="text-start max-w-3xl text-lg pb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t("our.ctc.allinfo.description")}
      </motion.p>

      <section>
        <div className="mb-6">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search centers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 rounded-lg border border-lightblue shadow-sm shadow-lightblue transition-colors"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="space-y-8">
          {filteredCenters.map((center, index) => (
            <motion.div
              key={center.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Accordion
                type="single"
                collapsible
                defaultValue="item-0"
                className="rounded-lg px-4 bg-slate-50 hover:bg-slate-100 shadow-sm hover:shadow-lightblue "
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className=" hover:no-underline">
                    <div className="flex items-center gap-2 ">
                      <MapPin className="w-8 h-8 text-secondary" />
                      <TextElement variant="title" className="text-start">
                        {center.name} - {center.location}
                      </TextElement>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-background p-4 rounded-lg mb-4">
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-primary">
                            Center Information
                          </h3>
                          <TextElement variant="paragraph">
                            {center.description}
                          </TextElement>
                          <div className="space-y-2 text-lg">
                            <p className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-secondary" />
                              {center.address}
                            </p>
                            <p className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-secondary" />
                              {center.phone}
                            </p>
                            <p className="flex items-center gap-2">
                              <Mail className="w-4 h-4 text-secondary" />
                              {center.email}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-primary">
                            Courses Offered
                          </h3>
                          <ul className="list-disc list-inside space-y-1 text-lg">
                            {center.courses.map((course, index) => (
                              <li key={index}>{course}</li>
                            ))}
                          </ul>
                          <h3 className="text-lg font-semibold text-primary mt-6">
                            Facilities
                          </h3>
                          <ul className="list-disc list-inside space-y-1 text-lg">
                            {center.facilities.map((facility, index) => (
                              <li key={index}>{facility}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6">
                        <Button className="bg-primary hover:bg-primary/90 text-white">
                          Contact Center
                        </Button>
                      </div>
                    </CardContent>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
