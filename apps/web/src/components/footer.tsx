import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LOGO_URL =
  "https://cdn.sanity.io/images/s6kuy1ts/production/68c438f68264717e93c7ba1e85f1d0c4b58b33c2-1200x621.svg";

const sections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <section className="pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <footer>
          <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
            <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
              <div>
                <span className="flex items-center justify-center gap-4 lg:justify-start">
                  <Image
                    src={LOGO_URL}
                    alt="logo"
                    width={80}
                    height={40}
                    priority
                  />
                </span>
                <p className="mt-6 text-sm text-muted-foreground">
                  A collection of 100+ responsive HTML templates for
                  your startup business or side project.
                </p>
              </div>
              <ul className="flex items-center space-x-6 text-muted-foreground">
                <li className="font-medium hover:text-primary">
                  <Link href="#">
                    <Instagram className="size-6" />
                  </Link>
                </li>
                <li className="font-medium hover:text-primary">
                  <Link href="#">
                    <Facebook className="size-6" />
                  </Link>
                </li>
                <li className="font-medium hover:text-primary">
                  <Link href="#">
                    <Twitter className="size-6" />
                  </Link>
                </li>
                <li className="font-medium hover:text-primary">
                  <Link href="#">
                    <Linkedin className="size-6" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-3 gap-6 lg:gap-20">
              {sections.map((section, sectionIdx) => (
                <div key={section.title}>
                  <h3 className="mb-6 font-bold">{section.title}</h3>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={link.name}
                        className="font-medium hover:text-primary"
                      >
                        <Link href={link.href}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
            <p>© 2024 Roboto Demo. All rights reserved.</p>
            <ul className="flex justify-center gap-4 lg:justify-start">
              <li className="hover:text-primary">
                <Link href="#"> Terms and Conditions</Link>
              </li>
              <li className="hover:text-primary">
                <Link href="#"> Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
}
