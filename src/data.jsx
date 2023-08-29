import { SmileOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import { MdOutlineAccountBalance, MdOutlinePayments } from "react-icons/md";
import { CiBank, CiGlobe } from "react-icons/ci";
import {
  AiOutlineShop,
  AiOutlineShopping,
  AiOutlineTeam,
  AiOutlineFileText,
  AiOutlineQrcode,
} from "react-icons/ai";
import { RiVisaLine } from "react-icons/ri";
import ArrowBtn from "./components/Common/ArrowBtn";
import { FaCcMastercard, FaRegMoneyBillAlt, FaUsb } from "react-icons/fa";
import { FcWiFiLogo } from "react-icons/fc";

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
          { key: `${uuidv4()}`, title: "Accept Payments", href: "/" },
          { key: `${uuidv4()}`, title: "Make Payments", href: "/" },
          { key: `${uuidv4()}`, title: "POS Terminals", href: "/" },
          { key: `${uuidv4()}`, title: "Invoicing", href: "/" },
          { key: `${uuidv4()}`, title: "Service Status", href: "/" },
        ],
      },
      {
        key: `${uuidv4()}`,
        title: "Banking",
        description: "Access the financial tools you need",
        icon: <CiBank />,
        subChildren: [{ key: `${uuidv4()}`, title: "Savings", href: "/" }],
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
    href: "/",
  },
  {
    key: `${uuidv4()}`,
    title: "Open an account",
    href: "/",
  },
];

export const footer_links = [
  {
    title: "Products",
    data: [
      { key: `${uuidv4()}`, href: "/", description: "Accept payments" },
      { key: `${uuidv4()}`, href: "/", description: "Make payments" },
      { key: `${uuidv4()}`, href: "/", description: "POS Terminals" },
      { key: `${uuidv4()}`, href: "/", description: "Invoice" },
    ],
  },
  {
    title: "Nomba",
    data: [
      { key: `${uuidv4()}`, href: "/", description: "About us" },
      { key: `${uuidv4()}`, href: "/", description: "Blog" },
      { key: `${uuidv4()}`, href: "/", description: "Work with Nomba" },
    ],
  },
  {
    title: "Business Types",
    data: [
      { key: `${uuidv4()}`, href: "/", description: "Small Business" },
      { key: `${uuidv4()}`, href: "/", description: "Large business" },
    ],
  },
  {
    title: "Contact us",
    data: [
      { key: `${uuidv4()}`, href: "/", description: "018888866" },
      { key: `${uuidv4()}`, href: "/", description: "015200061" },
      { key: `${uuidv4()}`, href: "/", description: "018888800" },
      { key: `${uuidv4()}`, href: "/", description: "support@nomba.com" },
    ],
  },
  {
    title: "Follow us",
    data: [
      { key: `${uuidv4()}`, href: "/", description: "Instagram" },
      { key: `${uuidv4()}`, href: "/", description: "Twitter" },
      { key: `${uuidv4()}`, href: "/", description: "Youtube" },
      { key: `${uuidv4()}`, href: "/", description: "Facebook" },
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

export const services_data = [
  {
    key: `${uuidv4()}`,
    title: "Invoicing",
    description:
      "Create and send invoices to collect payments stress-free. Automate reminders to customers/clients. We'll prioritise your payment collection for you",
    action: (
      <ArrowBtn
        description={"Get Nomba for your growing business"}
        className={"font-bold py-3"}
      />
    ),
    image:
      "https://www.shutterstock.com/shutterstock/videos/1097003705/thumb/11.jpg?ip=x480",
  },
  {
    key: `${uuidv4()}`,
    title: "Inventory",
    description:
      "Create and send invoices to collect payments stress-free. Automate reminders to customers/clients. We'll prioritise your payment collection for you",
    action: (
      <ArrowBtn
        description={"Get Nomba for your growing business"}
        className={"font-bold py-3"}
      />
    ),
    image:
      "https://media.istockphoto.com/id/1387247460/photo/a-dispatcher-with-scanner-in-hands-looking-at-boxes-on-shelves-in-warehouse.jpg?s=612x612&w=0&k=20&c=jSpuadxyKxF60C0OO2OBDsPhvdWmkGGlkN4fgfGB1EY=",
  },
  {
    key: `${uuidv4()}`,
    title: "Teams",
    description:
      "Create and send invoices to collect payments stress-free. Automate reminders to customers/clients. We'll prioritise your payment collection for you",
    action: (
      <ArrowBtn
        description={"Get Nomba for your growing business"}
        className={"font-bold py-3"}
      />
    ),
    image:
      "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWz4Qe?ver=188d&q=90&m=2&h=768&w=1024&b=%23FFFFFFFF&aim=true",
  },
  {
    key: `${uuidv4()}`,
    title: "Menu",
    description:
      "Create and send invoices to collect payments stress-free. Automate reminders to customers/clients. We'll prioritise your payment collection for you",
    action: (
      <ArrowBtn
        description={"Get Nomba for your growing business"}
        className={"font-bold py-3"}
      />
    ),
    image:
      "https://media.istockphoto.com/id/1412609544/photo/wooden-cooking-spoons-on-chalk-board.webp?b=1&s=170667a&w=0&k=20&c=_shjwGJKerrMnnGpRxHwtw1xj23Fb6l9BGCYwiFp7ws=",
  },
  {
    key: `${uuidv4()}`,
    title: "Payment",
    description:
      "Create and send invoices to collect payments stress-free. Automate reminders to customers/clients. We'll prioritise your payment collection for you",
    action: (
      <ArrowBtn
        description={"Get Nomba for your growing business"}
        className={"font-bold py-3"}
      />
    ),

    image:
      "https://www.magestore.com/wp-content/uploads/2020/06/pos_terminals_and_payment_solutions_for_your_business.jpg",
  },
  {
    key: `${uuidv4()}`,
    title: "Settlement",
    description:
      "Create and send invoices to collect payments stress-free. Automate reminders to customers/clients. We'll prioritise your payment collection for you",
    action: (
      <ArrowBtn
        description={"Get Nomba for your growing business"}
        className={"font-bold py-3"}
      />
    ),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd4hZ4glWJuTHtvSsClAoLB558sy9SeXehVOA8Ssc1hbk0xt6JvFzdRCqWZApMxQxBxXQ&usqp=CAU",
  },
  {
    key: `${uuidv4()}`,
    title: "Pay by QR",
    description:
      "Create and send invoices to collect payments stress-free. Automate reminders to customers/clients. We'll prioritise your payment collection for you",
    action: (
      <ArrowBtn
        description={"Get Nomba for your growing business"}
        className={"font-bold py-3"}
      />
    ),
    image:
      "https://media.qrtiger.com/blog/2022/03/cashless-payment-using-qr-codejpg_800.jpeg",
  },
];

export const options = [
  {
    key: `${uuidv4()}`,
    title: "Accept all bank cards",
    description: "Receive your card payments through the Nomba POS terminals",
    icon: <MdOutlineAccountBalance className="text-black text-2xl" />,
  },
  {
    key: `${uuidv4()}`,
    title: "Transfer to an account",
    description:
      "With an account number, you can take payments into your account through transfers",
    icon: <FaRegMoneyBillAlt className="text-black text-2xl" />,
  },
  {
    key: `${uuidv4()}`,
    title: "Accept all bank cards",
    description: "Receive your card payments through the Nomba POS terminals",
    icon: <AiOutlineQrcode className="text-black text-2xl" />,
  },
];

export const gadgets = [
  {
    key: `${uuidv4()}`,
    title: "Nomba Mini",
    designation: "Outright purchase",
    price: "25,000",
    description:
      "Accept all Bank Cards, the new pocket-sized terminal for swift and successful transactions.",
    action: (
      <ArrowBtn
        description={"Buy now"}
        className={"basis-[50%] font-bold py-3 justify-end"}
      />
    ),
    cards: [<RiVisaLine />, <FaCcMastercard />, <FcWiFiLogo />, <FaUsb />],
    image:
      "https://cdn.punchng.com/wp-content/uploads/2022/05/09095107/Pos.jpeg",
  },
  {
    key: `${uuidv4()}`,
    title: "Nomba Lite",
    designation: "Outright purchase",
    price: "25,000",
    description:
      "Accept all Bank Cards, the new pocket-sized terminal for swift and successful transactions.",
    action: (
      <ArrowBtn
        description={"Buy now"}
        className={"basis-[50%] font-bold py-3 justify-end"}
      />
    ),
    cards: [<RiVisaLine />, <FaCcMastercard />, <FcWiFiLogo />, <FaUsb />],
    image:
      "https://cdn.punchng.com/wp-content/uploads/2022/05/09095107/Pos.jpeg",
  },
  {
    key: `${uuidv4()}`,
    title: "Nomba Pro",
    designation: "Outright purchase",
    price: "25,000",
    description:
      "Accept all Bank Cards, the new pocket-sized terminal for swift and successful transactions.",
    action: (
      <ArrowBtn
        description={"Buy now"}
        className={"basis-[50%] font-bold py-3 justify-end"}
      />
    ),
    cards: [<RiVisaLine />, <FaCcMastercard />, <FcWiFiLogo />, <FaUsb />],
    image:
      "https://cdn.punchng.com/wp-content/uploads/2022/05/09095107/Pos.jpeg",
  },
  {
    key: `${uuidv4()}`,
    title: "Nomba Max",
    designation: "Outright purchase",
    price: "25,000",
    description:
      "Accept all Bank Cards, the new pocket-sized terminal for swift and successful transactions.",
    action: (
      <ArrowBtn
        description={"Buy now"}
        className={"basis-[50%] font-bold py-3 justify-end"}
      />
    ),
    cards: [<RiVisaLine />, <FaCcMastercard />, <FcWiFiLogo />, <FaUsb />],
    image:
      "https://cdn.punchng.com/wp-content/uploads/2022/05/09095107/Pos.jpeg",
  },
];
