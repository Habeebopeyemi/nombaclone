import { SmileOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import { MdOutlinePayments } from "react-icons/md";
import { CiBank, CiGlobe } from "react-icons/ci";
import {
  AiOutlineShop,
  AiOutlineShopping,
  AiOutlineTeam,
  AiOutlineFileText,
} from "react-icons/ai";

export const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];

export const nav_links = [
  {
    key: `${uuidv4()}`,
    title: "PRODUCTS",
    children: [
      {
        key: `${uuidv4()}`,
        title: "Payments",
        description: "Accept and make payments on Nomba",
        icon: <MdOutlinePayments />,
        subChildren: [
          { key: `${uuidv4()}`, title: "Accept Payments", href: "#" },
          { key: `${uuidv4()}`, title: "Make Payments", href: "#" },
          { key: `${uuidv4()}`, title: "POS Terminals", href: "#" },
          { key: `${uuidv4()}`, title: "Invoicing", href: "#" },
          { key: `${uuidv4()}`, title: "Service Status", href: "#" },
        ],
      },
      {
        key: `${uuidv4()}`,
        title: "Banking",
        description: "Access the financial tools you need",
        icon: <CiBank />,
        subChildren: [{ key: `${uuidv4()}`, title: "Savings", href: "#" }],
      },
    ],
  },
  {
    key: `${uuidv4()}`,
    title: "BUSINESS TYPES",
    children: [
      {
        key: `${uuidv4()}`,
        title: "Small Business",
        description: "Track payments and your business",
        icon: <AiOutlineShop />,
      },
      {
        key: `${uuidv4()}`,
        title: "Large Business",
        description: "Manage operations, and track growth",
        icon: <AiOutlineShopping />,
      },
    ],
  },
  {
    key: `${uuidv4()}`,
    title: "COMPANY",
    children: [
      {
        key: `${uuidv4()}`,
        title: "About Us",
        description: "Get to know the team",
        icon: <CiGlobe />,
      },
      {
        key: `${uuidv4()}`,
        title: "Work with Nomba",
        description: "Available roles at Nomba",
        icon: <AiOutlineTeam />,
      },
      {
        key: `${uuidv4()}`,
        title: "Blog",
        description: "Insights and updates from Nomba",
        icon: <AiOutlineFileText />,
      },
    ],
  },
];

export const navbutton = [
  {
    key: `${uuidv4()}`,
    title: "Sign in",
    href: "#",
  },
  {
    key: `${uuidv4()}`,
    title: "Open an account",
    href: "#",
  },
];

export const footer_links = [
  {
    title: "Products",
    data: [
      { key: `${uuidv4()}`, href: "#", description: "Accept payments" },
      { key: `${uuidv4()}`, href: "#", description: "Make payments" },
      { key: `${uuidv4()}`, href: "#", description: "POS Terminals" },
      { key: `${uuidv4()}`, href: "#", description: "Invoice" },
    ],
  },
  {
    title: "Nomba",
    data: [
      { key: `${uuidv4()}`, href: "#", description: "About us" },
      { key: `${uuidv4()}`, href: "#", description: "Blog" },
      { key: `${uuidv4()}`, href: "#", description: "Work with Nomba" },
    ],
  },
  {
    title: "Business Types",
    data: [
      { key: `${uuidv4()}`, href: "#", description: "Small Business" },
      { key: `${uuidv4()}`, href: "#", description: "Large business" },
    ],
  },
  {
    title: "Contact us",
    data: [
      { key: `${uuidv4()}`, href: "#", description: "018888866" },
      { key: `${uuidv4()}`, href: "#", description: "015200061" },
      { key: `${uuidv4()}`, href: "#", description: "018888800" },
      { key: `${uuidv4()}`, href: "#", description: "support@nomba.com" },
    ],
  },
  {
    title: "Follow us",
    data: [
      { key: `${uuidv4()}`, href: "#", description: "Instagram" },
      { key: `${uuidv4()}`, href: "#", description: "Twitter" },
      { key: `${uuidv4()}`, href: "#", description: "Youtube" },
      { key: `${uuidv4()}`, href: "#", description: "Facebook" },
    ],
  },
];

export const footer_address = [
  {
    key: `${uuidv4()}`,
    flag: <span className="mr-1">&#127475;&#127468;</span>,
    country: "Nigeria",
    location: [
      "16 Billings Way Oregun Ikeja, Lagos, Nigeria",
      "19b Bosun Adekoya Street, Lekki Phase 1, Lagos, Nigeria",
    ],
  },
  {
    key: `${uuidv4()}`,
    flag: <span className="mr-1">&#127482;&#127480;</span>,
    country: "United States",
    location: ["580 California St, 12th Floor, San Francisco, CA 94104"],
  },
];
