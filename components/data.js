import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Solutions and services",
  desc: "We help with outdated software, inefficient processes, and turning ideas into reality using the latest technologies for high-quality, scalable, and secure solutions.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Software Development",
      desc: "We build custom software tailored to your business needs.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "UX/UI",
      desc: "We design intuitive and engaging user interfaces.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Consulting",
      desc: "We provide expert advice to optimize your IT strategy.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Innovative solutions",
  desc: "We offer innovative solutions to help you stay ahead in the digital world.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Design",
      desc: "Our designs are mobile responsive, ensuring a seamless experience across devices.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Latest Technologies",
      desc: "We use the latest technologies to deliver high-quality solutions.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Customer Satisfaction",
      desc: "We strive for 100% customer satisfaction.",
      icon: <SunIcon />,
    },
  ],
};

export {benefitOne, benefitTwo};