"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MemberCard from "./MemberCard";

const members = [
  { name: "Subhash Menon", post: "President", imageSrc: "/images/members/subhash-menon.jpg" },
  { name: "Ramesh Nair", post: "General Secretary", imageSrc: "/images/members/ramesh-nair.jpg" },
  { name: "Suresh Nair", post: "Vice President", imageSrc: "/images/members/suresh-nair.jpg" },
  { name: "Ramdas Nair", post: "Joint Secretary", imageSrc: "/images/members/ramdas-nair.jpg" },
  { name: "Ravi Kumar", post: "Treasurer", imageSrc: "/images/members/ravi-kumar.jpg" },
  { name: "Jay Kumar", post: "Joint Treasurer", imageSrc: "/images/members/jay-kumar.jpg" },
];

export default function MemberCarousel() {
  return (
    <Slider
      dots={true}
      infinite={true}
      speed={500}
      slidesToShow={3}
      slidesToScroll={1}
      responsive={[{
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      }, {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }]}
      className="mb-4"
    >
      {members.map((member) => (
        <MemberCard key={member.name} {...member} />
      ))}
    </Slider>
  );
}
