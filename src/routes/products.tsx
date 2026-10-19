import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/products")({
  validateSearch: (search: Record<string, unknown>) => ({
    category: typeof search.category === "string" ? search.category : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Products — FMANAR Luxury Italian Furniture" },
      {
        name: "description",
        content: "Browse the FMANAR collection of luxury Italian furniture.",
      },
      { property: "og:title", content: "Products — FMANAR" },
      {
        property: "og:description",
        content: "The FMANAR furniture collection. Hand-finished Italian craftsmanship.",
      },
    ],
  }),
  component: ProductsPage,
});

type RouteTarget = {
  to: string;
  search?: Record<string, string>;
};

const customerServiceRoutes: Record<string, RouteTarget> = {
  Living: { to: "/products", search: { category: "Living Room" } },
  Bedroom: { to: "/products", search: { category: "Bedroom" } },
  Dining: { to: "/products", search: { category: "Dining Room" } },
  Office: { to: "/products", search: { category: "Office Room" } },
  Delivery: { to: "/delivery" },
  "Privacy Policy": { to: "/privacy-policy" },
  "Shipping Policy": { to: "/shipping-policy" },
  "Return and Refunds": { to: "/return-and-refunds" },
  "Important Notice": { to: "/important-notice" },
  Feedback: { to: "/contact" },
};

export type Product = {
  name: string;
  img: string;
  images?: string[];
  tag?: string;
  desc?: string;
};

export function getProductImages(product: Product): string[] {
  if (product.images && product.images.length > 0) {
    return product.images;
  }
  const mainImg = product.img;
  const lastDotIndex = mainImg.lastIndexOf(".");
  if (lastDotIndex === -1) return [mainImg];

  const basePath = mainImg.substring(0, lastDotIndex);
  const ext = mainImg.substring(lastDotIndex);

  return [mainImg, `${basePath}-1${ext}`, `${basePath}-2${ext}`];
}

const OSS_BASE_URL = "https://haiwaifmanarcp.oss-cn-hongkong.aliyuncs.com/Luxury";

const productsByCategory: Record<string, Product[]> = {
  "Living Room": [
    // --- 新增：visio living room 系列 ---
    {
      name: "Babylon Curved Sofa",
      img: `${OSS_BASE_URL}/visio%20living%20room/Babylon%20Curved%20Sofa1.jpg`,
      images: [
        `${OSS_BASE_URL}/visio%20living%20room/Babylon%20Curved%20Sofa1.jpg`,
        `${OSS_BASE_URL}/visio%20living%20room/Babylon%20Curved%20Sofa2.jpg`,
        `${OSS_BASE_URL}/visio%20living%20room/Babylon%20Curved%20Sofa3.jpg`,
        `${OSS_BASE_URL}/visio%20living%20room/Babylon%20Curved%20Sofa4.jpg`,
        `${OSS_BASE_URL}/visio%20living%20room/Babylon%20Curved%20Sofa5.png`,
        `${OSS_BASE_URL}/visio%20living%20room/Babylon%20Curved%20Sofa6.png`
      ],
      tag: "NEW",
      desc: "Visionnaire-inspired Grand Curved Silhouette · High-Density Memory Foam"
    },
    {
      name: "Babylon Standard Sofa",
      img: `${OSS_BASE_URL}/visio%20living%20room/Babylon%20Sofa1.jpg`,
      images: [
        `${OSS_BASE_URL}/visio%20living%20room/Babylon%20Sofa1.jpg`,
        `${OSS_BASE_URL}/visio%20living%20room/Babylon%20Sofa2.jpg`,
        `${OSS_BASE_URL}/visio%20living%20room/Babylon%20Sofa3.jpg`,
        `${OSS_BASE_URL}/visio%20living%20room/Babylon%20Sofa4.jpg`,
        `${OSS_BASE_URL}/visio%20living%20room/Babylon%20Sofa5.jpg`,
        `${OSS_BASE_URL}/visio%20living%20room/Babylon%20Sofa6.jpg`,
        `${OSS_BASE_URL}/visio%20living%20room/Babylon%20Sofa7.jpg`
      ],
      tag: "NEW",
      desc: "Tailored Italian Upholstery · Solid Wood Foundation"
    },
    // --- 原有 Living 经典产品 ---
    {
      name: "Newert Sofa",
      img: `${OSS_BASE_URL}/Living%20room4/Newert%20safa1.jpg`,
      images: [
        `${OSS_BASE_URL}/Living%20room4/Newert%20safa1.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Newert%20safa2.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Newert%20safa3.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Newert%20safa4.jpg`
      ],
      tag: "NEW",
      desc: "Curved Solid Beech Wood Frame · High-density foam padding"
    },
    {
      name: "Embrace Sofa",
      img: `${OSS_BASE_URL}/Living%20room4/Embrace%20sofa1.jpg`,
      images: [
        `${OSS_BASE_URL}/Living%20room4/Embrace%20sofa1.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Embrace%20sofa2.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Embrace%20sofa3.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Embrace%20sofa4.jpg`
      ],
      tag: "NEW",
      desc: "Embracing Organic Curves"
    },
    {
      name: "Bainton Sofa",
      img: `${OSS_BASE_URL}/Living%20room4/Bainton%20Sofa1.jpg`,
      images: [
        `${OSS_BASE_URL}/Living%20room4/Bainton%20Sofa1.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Bainton%20Sofa2.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Bainton%20Sofa3.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Bainton%20Sofa4.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Bainton%20Sofa5.jpg`
      ],
      desc: "Full-Grain Aniline Leather"
    },
    {
      name: "Lyman Sofa",
      img: `${OSS_BASE_URL}/Living%20room4/Lyman%20Sofa1.jpg`,
      images: [
        `${OSS_BASE_URL}/Living%20room4/Lyman%20Sofa1.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Lyman%20Sofa2.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Lyman%20Sofa3.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Lyman%20Sofa4.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Lyman%20Sofa5.jpg`
      ],
      desc: "Deep Lounge Ergonomics"
    },
    {
      name: "Havergate Sofa",
      img: `${OSS_BASE_URL}/Living%20room4/Havergate%20Sofa1.jpg`,
      images: [
        `${OSS_BASE_URL}/Living%20room4/Havergate%20Sofa1.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Havergate%20Sofa2.jpg`
      ],
      desc: "Architectural Proportions"
    },
    {
      name: "Elena Sofa",
      img: `${OSS_BASE_URL}/Living%20room3/Elena%20Sofa1.jpg`,
      images: [
        `${OSS_BASE_URL}/Living%20room3/Elena%20Sofa1.jpg`,
        `${OSS_BASE_URL}/Living%20room3/Elena%20Sofa2.jpg`,
        `${OSS_BASE_URL}/Living%20room3/Elena%20Sofa3.jpg`,
        `${OSS_BASE_URL}/Living%20room3/Elena%20Sofa4.jpg`,
        `${OSS_BASE_URL}/Living%20room3/Elena%20Sofa5.jpg`,
        `${OSS_BASE_URL}/Living%20room3/Elena%20Sofa6.JPG`
      ],
      desc: "Italian Tailoring Detail"
    },
    {
      name: "Krezer Sofa",
      img: `${OSS_BASE_URL}/Living%20room3/Krezer%20Sofa1.jpg`,
      images: [
        `${OSS_BASE_URL}/Living%20room3/Krezer%20Sofa1.jpg`,
        `${OSS_BASE_URL}/Living%20room3/Krezer%20Sofa2.jpg`,
        `${OSS_BASE_URL}/Living%20room3/Krezer%20Sofa3.jpg`,
        `${OSS_BASE_URL}/Living%20room3/Krezer%20Sofa4.jpg`,
        `${OSS_BASE_URL}/Living%20room3/Krezer%20Sofa5.jpg`
      ],
      desc: "High-Resilience Dual Layer"
    },
    {
      name: "Five Sofa",
      img: `${OSS_BASE_URL}/Living%20room3/Five%20Sofa1.jpg`,
      images: [
        `${OSS_BASE_URL}/Living%20room3/Five%20Sofa1.jpg`,
        `${OSS_BASE_URL}/Living%20room3/Five%20Sofa2.jpg`,
        `${OSS_BASE_URL}/Living%20room3/Five%20Sofa3.jpg`
      ],
      desc: "Modular Multi-Configuration"
    },
    {
      name: "Leather Belt Sofa",
      img: `${OSS_BASE_URL}/Living%20room3/Leather%20Belt%20Sofa1.jpg`,
      images: [
        `${OSS_BASE_URL}/Living%20room3/Leather%20Belt%20Sofa1.jpg`,
        `${OSS_BASE_URL}/Living%20room3/Leather%20Belt%20Sofa2.jpg`,
        `${OSS_BASE_URL}/Living%20room3/Leather%20Belt%20Sofa3.jpg`,
        `${OSS_BASE_URL}/Living%20room3/Leather%20Belt%20Sofa4.jpg`,
        `${OSS_BASE_URL}/Living%20room3/Leather%20Belt%20Sofa5.jpg`
      ],
      tag: "NEW",
      desc: "Saddle Leather Straps & Brass"
    },
    {
      name: "Malawi Sofa",
      img: `${OSS_BASE_URL}/Living%20room3/Malawi%20Sofa1.jpg`,
      images: [
        `${OSS_BASE_URL}/Living%20room3/Malawi%20Sofa1.jpg`,
        `${OSS_BASE_URL}/Living%20room3/Malawi%20Sofa2.jpg`,
        `${OSS_BASE_URL}/Living%20room3/Malawi%20Sofa3.jpg`,
        `${OSS_BASE_URL}/Living%20room3/Malawi%20Sofa4.jpg`,
        `${OSS_BASE_URL}/Living%20room3/Malawi%20Sofa5.jpg`,
        `${OSS_BASE_URL}/Living%20room3/Malawi%20Sofa6.jpg`,
        `${OSS_BASE_URL}/Living%20room3/Malawi%20Sofa7.jpg`
      ],
      desc: "Sculptural Curved Backrest"
    },
    {
      name: "Rhapsody Sofa",
      img: `${OSS_BASE_URL}/Living%20room3/Rhapsody%20Sofa1.jpg`,
      images: [
        `${OSS_BASE_URL}/Living%20room3/Rhapsody%20Sofa1.jpg`,
        `${OSS_BASE_URL}/Living%20room3/Rhapsody%20Sofa2.jpg`,
        `${OSS_BASE_URL}/Living%20room3/Rhapsody%20Sofa3.jpg`,
        `${OSS_BASE_URL}/Living%20room3/Rhapsody%20Sofa4.jpg`,
        `${OSS_BASE_URL}/Living%20room3/Rhapsody%20Sofa5.jpg`
      ],
      desc: "Tactile Luxury Bouclé"
    },
    {
      name: "Tucson Blues Sofa",
      img: `${OSS_BASE_URL}/Living%20room3/Tucson%20Blues%20Sofa1.jpg`,
      images: [
        `${OSS_BASE_URL}/Living%20room3/Tucson%20Blues%20Sofa1.jpg`,
        `${OSS_BASE_URL}/Living%20room3/Tucson%20Blues%20Sofa2.jpg`,
        `${OSS_BASE_URL}/Living%20room3/Tucson%20Blues%20Sofa3.jpg`,
        `${OSS_BASE_URL}/Living%20room3/Tucson%20Blues%20Sofa4.jpg`,
        `${OSS_BASE_URL}/Living%20room3/Tucson%20Blues%20Sofa5.jpg`
      ],
      desc: "Nubuck Leather Finish"
    },
    {
      name: "Siena Sofa",
      img: `${OSS_BASE_URL}/Living%20room3/Siena%20Sofa1.jpg`,
      images: [
        `${OSS_BASE_URL}/Living%20room3/Siena%20Sofa1.jpg`,
        `${OSS_BASE_URL}/Living%20room3/Siena%20Sofa2.jpg`,
        `${OSS_BASE_URL}/Living%20room3/Siena%20Sofa3.jpg`,
        `${OSS_BASE_URL}/Living%20room3/Siena%20Sofa4.jpg`
      ],
      desc: "Minimalist Villa Living"
    },
    {
      name: "Annual Ring Sofa",
      img: `${OSS_BASE_URL}/Living%20room3/Annual%20Ring%20Sofa1.jpg`,
      images: [
        `${OSS_BASE_URL}/Living%20room3/Annual%20Ring%20Sofa1.jpg`,
        `${OSS_BASE_URL}/Living%20room3/Annual%20Ring%20Sofa2.jpg`,
        `${OSS_BASE_URL}/Living%20room3/Annual%20Ring%20Sofa3.jpg`
      ],
      desc: "Natural Grain Wooden Accent"
    },
    {
      name: "Stone Sofa",
      img: `${OSS_BASE_URL}/Living%20room4/Stone%20Sofa1.jpg`,
      images: [
        `${OSS_BASE_URL}/Living%20room4/Stone%20Sofa1.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Stone%20Sofa2.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Stone%20Sofa3.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Stone%20Sofa4.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Stone%20Sofa5.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Stone%20Sofa6.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Stone%20Sofa7.jpg`
      ],
      desc: "Low-Profile Lounge"
    },
    {
      name: "Tiverton Sofa",
      img: `${OSS_BASE_URL}/Living%20room4/Tiverton%20Sofa1.jpg`,
      images: [
        `${OSS_BASE_URL}/Living%20room4/Tiverton%20Sofa1.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Tiverton%20Sofa2.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Tiverton%20Sofa3.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Tiverton%20Sofa4.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Tiverton%20Sofa5.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Tiverton%20Sofa6.png`,
        `${OSS_BASE_URL}/Living%20room4/Tiverton%20Sofa7.png`
      ],
      desc: "Feather Down Fillings"
    },
    {
      name: "Now Barton Sofa",
      img: `${OSS_BASE_URL}/Living%20room4/Now%20Barton%20Sofa1.jpg`,
      images: [
        `${OSS_BASE_URL}/Living%20room4/Now%20Barton%20Sofa1.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Now%20Barton%20Sofa2.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Now%20Barton%20Sofa3.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Now%20Barton%20Sofa4.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Now%20Barton%20Sofa5.jpg`
      ],
      desc: "Modern Clean Lines"
    },
    {
      name: "Ramsey Sofa",
      img: `${OSS_BASE_URL}/Living%20room4/Ramsey%20Sofa1.jpg`,
      images: [
        `${OSS_BASE_URL}/Living%20room4/Ramsey%20Sofa1.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Ramsey%20Sofa2.jpg`
      ],
      desc: "Solid Beech Foundation"
    },
    {
      name: "Supercar Sofa",
      img: `${OSS_BASE_URL}/Living%20room3/Supercar%20Sofa.jpg`,
      desc: "Dynamic Aerodynamic Form"
    },
    {
      name: "Winston Sofa",
      img: `${OSS_BASE_URL}/Living%20room4/Winston%20Sofa1.jpg`,
      images: [
        `${OSS_BASE_URL}/Living%20room4/Winston%20Sofa1.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Winston%20Sofa2.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Winston%20Sofa3.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Winston%20Sofa4.jpg`,
        `${OSS_BASE_URL}/Living%20room4/Winston%20Sofa5.jpg`
      ],
      desc: "Grand Hospitality Scale"
    }
  ],
  "Dining Room": [
    {
      name: "Barton Dining Table",
      img: `${OSS_BASE_URL}/dining%20room4/Barton%20Dining%20Table1.jpg`,
      images: [
        `${OSS_BASE_URL}/dining%20room4/Barton%20Dining%20Table1.jpg`,
        `${OSS_BASE_URL}/dining%20room4/Barton%20Dining%20Table2.jpg`
      ],
      tag: "NEW",
      desc: "Handcrafted Natural Marble & Timber"
    },
    {
      name: "Majestic Dining Table",
      img: `${OSS_BASE_URL}/dining%20room3/Majestic%20Dining%20Table1.JPG`,
      images: [
        `${OSS_BASE_URL}/dining%20room3/Majestic%20Dining%20Table1.JPG`,
        `${OSS_BASE_URL}/dining%20room3/Majestic%20Dining%20Table2.jpg`,
        `${OSS_BASE_URL}/dining%20room3/Majestic%20Dining%20Table3.jpg`
      ],
      desc: "Sculptural Central Pedestal"
    },
    {
      name: "Newent Dining Table",
      img: `${OSS_BASE_URL}/dining%20room4/Newent%20Dining%20Table1.jpg`,
      images: [
        `${OSS_BASE_URL}/dining%20room4/Newent%20Dining%20Table1.jpg`
      ],
      desc: "Curved Solid Beech Base"
    },
    {
      name: "Raglan Dining Table",
      img: `${OSS_BASE_URL}/dining%20room3/Raglan%20Dining%20Table1.jpg`,
      images: [
        `${OSS_BASE_URL}/dining%20room3/Raglan%20Dining%20Table1.jpg`,
        `${OSS_BASE_URL}/dining%20room3/Raglan%20Dining%20Table2.jpg`,
        `${OSS_BASE_URL}/dining%20room3/Raglan%20Dining%20Table3.jpg`,
        `${OSS_BASE_URL}/dining%20room3/Raglan%20Dining%20Table4.jpg`,
        `${OSS_BASE_URL}/dining%20room3/Raglan%20Dining%20Table5.jpg`
      ],
      desc: "Brushed Champagne Metal Accents"
    },
    {
      name: "Ramsey Dining Table",
      img: `${OSS_BASE_URL}/dining%20room4/Ramsey%20Dining%20Table1.jpg`,
      images: [
        `${OSS_BASE_URL}/dining%20room4/Ramsey%20Dining%20Table1.jpg`,
        `${OSS_BASE_URL}/dining%20room4/Ramsey%20Dining%20Table2.jpg`,
        `${OSS_BASE_URL}/dining%20room4/Ramsey%20Dining%20Table3.jpg`
      ],
      desc: "Solid Hardwood Joinery"
    },
    {
      name: "Stamboul Dining Table",
      img: `${OSS_BASE_URL}/dining%20room4/Stamboul%20Dining%20Teble1.jpg`,
      images: [
        `${OSS_BASE_URL}/dining%20room4/Stamboul%20Dining%20Teble1.jpg`,
        `${OSS_BASE_URL}/dining%20room4/Stamboul%20Dining%20Teble2.jpg`,
        `${OSS_BASE_URL}/dining%20room4/Stamboul%20Dining%20Teble3.jpg`,
        `${OSS_BASE_URL}/dining%20room4/Stamboul%20Dining%20Teble4.jpg`
      ],
      desc: "Exotic Wood Veneer Top"
    },
    {
      name: "V-Dining Table",
      img: `${OSS_BASE_URL}/dining%20room3/V-Dining%20Table.JPG`,
      desc: "Geometric Architectural V-Leg"
    },
    {
      name: "Greca Dining Table",
      img: `${OSS_BASE_URL}/dining%20room3/Greca%20Dining%20Table1.jpg`,
      images: [
        `${OSS_BASE_URL}/dining%20room3/Greca%20Dining%20Table1.jpg`,
        `${OSS_BASE_URL}/dining%20room3/Greca%20Dining%20Table2.jpg`,
        `${OSS_BASE_URL}/dining%20room3/Greca%20Dining%20Table3.JPG`,
        `${OSS_BASE_URL}/dining%20room3/Greca%20Dining%20Table4.JPG`,
        `${OSS_BASE_URL}/dining%20room3/Greca%20Dining%20Table5.JPG`,
        `${OSS_BASE_URL}/dining%20room3/Greca%20Dining%20Table6.JPG`
      ],
      desc: "Polished Quartzite Surface"
    }
  ],
  Bedroom: [
    // --- 新增：visi bed room 系列 ---
    {
      name: "Land System Boiserie Bed",
      img: `${OSS_BASE_URL}/visi%20bed%20room/Land%20System%20Boiserie%20Bed1.JPG`,
      images: [
        `${OSS_BASE_URL}/visi%20bed%20room/Land%20System%20Boiserie%20Bed1.JPG`,
        `${OSS_BASE_URL}/visi%20bed%20room/Land%20System%20Boiserie%20Bed2.JPG`,
        `${OSS_BASE_URL}/visi%20bed%20room/Land%20System%20Boiserie%20Bed3.JPG`,
        `${OSS_BASE_URL}/visi%20bed%20room/Land%20System%20Boiserie%20Bed4.JPG`
      ],
      tag: "NEW",
      desc: "Integrated Boiserie Wall Panel System · Luxurious Upholstered Headboard"
    },
    // --- 原有 Bedroom 经典产品 ---
    {
      name: "Gesu Bed",
      img: `${OSS_BASE_URL}/bed%20room3/Gesu%20Bed1.jpg`,
      images: [
        `${OSS_BASE_URL}/bed%20room3/Gesu%20Bed1.jpg`,
        `${OSS_BASE_URL}/bed%20room3/Gesu%20Bed2.jpg`,
        `${OSS_BASE_URL}/bed%20room3/Gesu%20Bed3.jpg`,
        `${OSS_BASE_URL}/bed%20room3/Gesu%20Bed4.jpg`,
        `${OSS_BASE_URL}/bed%20room3/Gesu%20Bed5.jpg`
      ],
      tag: "NEW",
      desc: "Architectural Curved Headboard"
    },
    {
      name: "Havergate Bed",
      img: `${OSS_BASE_URL}/bed%20room4/Havergate%20Bed1.jpg`,
      images: [
        `${OSS_BASE_URL}/bed%20room4/Havergate%20Bed1.jpg`,
        `${OSS_BASE_URL}/bed%20room4/Havergate%20Bed2.jpg`,
        `${OSS_BASE_URL}/bed%20room4/Havergate%20Bed3.jpg`
      ],
      desc: "Padded Surround Platform"
    },
    {
      name: "Leather Belt Bed",
      img: `${OSS_BASE_URL}/bed%20room3/Leather%20Belt%20Bed.JPG`,
      desc: "Hand-Stitched Saddle Leather"
    },
    {
      name: "Lyman Bed",
      img: `${OSS_BASE_URL}/bed%20room4/Lyman%20Bed1.jpg`,
      images: [
        `${OSS_BASE_URL}/bed%20room4/Lyman%20Bed1.jpg`,
        `${OSS_BASE_URL}/bed%20room4/Lyman%20Bed2.jpg`
      ],
      desc: "Cocooning Winged Comfort"
    },
    {
      name: "Malawi Bed",
      img: `${OSS_BASE_URL}/bed%20room3/Malawi%20Bed1.JPG`,
      images: [
        `${OSS_BASE_URL}/bed%20room3/Malawi%20Bed1.JPG`,
        `${OSS_BASE_URL}/bed%20room3/Malawi%20Bed2.JPG`,
        `${OSS_BASE_URL}/bed%20room3/Malawi%20Bed3.JPG`,
        `${OSS_BASE_URL}/bed%20room3/Malawi%20Bed4.JPG`
      ],
      desc: "Curved Minimalist Silhouette"
    },
    {
      name: "Midas Bed",
      img: `${OSS_BASE_URL}/bed%20room3/Midas%20%20Bed1.JPG`,
      images: [
        `${OSS_BASE_URL}/bed%20room3/Midas%20%20Bed1.JPG`,
        `${OSS_BASE_URL}/bed%20room3/Midas%20%20Bed2.JPG`
      ],
      desc: "Brushed Gold Trim Detail"
    },
    {
      name: "Newert Bed",
      img: `${OSS_BASE_URL}/bed%20room4/Newert%20Bed1.jpg`,
      images: [
        `${OSS_BASE_URL}/bed%20room4/Newert%20Bed1.jpg`,
        `${OSS_BASE_URL}/bed%20room4/Newert%20Bed2.jpg`,
        `${OSS_BASE_URL}/bed%20room4/Newert%20Bed3.jpg`
      ],
      desc: "Solid Beech Platform Base"
    },
    {
      name: "Newert Extra-Wide Bed",
      img: `${OSS_BASE_URL}/bed%20room4/Newert%20Extra-Wide%20Bed1.jpg`,
      images: [
        `${OSS_BASE_URL}/bed%20room4/Newert%20Extra-Wide%20Bed1.jpg`,
        `${OSS_BASE_URL}/bed%20room4/Newert%20Extra-Wide%20Bed2.jpg`,
        `${OSS_BASE_URL}/bed%20room4/Newert%20Extra-Wide%20Bed3.jpg`
      ],
      desc: "Integrated Extended Wall Panels"
    },
    {
      name: "Now V-Wide Bed",
      img: `${OSS_BASE_URL}/bed%20room3/Now%20V-Wide%20Bed1.JPG`,
      images: [
        `${OSS_BASE_URL}/bed%20room3/Now%20V-Wide%20Bed1.JPG`,
        `${OSS_BASE_URL}/bed%20room3/Now%20V-Wide%20Bed2.jpg`,
        `${OSS_BASE_URL}/bed%20room3/Now%20V-Wide%20Bed3.jpg`
      ],
      desc: "Geometric Grid Upholstery"
    },
    {
      name: "Ramsey Bed",
      img: `${OSS_BASE_URL}/bed%20room4/Ramsey%20Bed1.jpg`,
      images: [
        `${OSS_BASE_URL}/bed%20room4/Ramsey%20Bed1.jpg`,
        `${OSS_BASE_URL}/bed%20room4/Ramsey%20Bed2.jpg`,
        `${OSS_BASE_URL}/bed%20room4/Ramsey%20Bed3.jpg`
      ],
      desc: "Tailored Linen & Leather"
    },
    {
      name: "Rhapsody-Wide Bed",
      img: `${OSS_BASE_URL}/bed%20room3/Rhapsody-Wide%20Bed1.JPG`,
      images: [
        `${OSS_BASE_URL}/bed%20room3/Rhapsody-Wide%20Bed1.JPG`,
        `${OSS_BASE_URL}/bed%20room3/Rhapsody-Wide%20Bed2.JPG`,
        `${OSS_BASE_URL}/bed%20room3/Rhapsody-Wide%20Bed3.JPG`,
        `${OSS_BASE_URL}/bed%20room3/Rhapsody-Wide%20Bed4.JPG`,
        `${OSS_BASE_URL}/bed%20room3/Rhapsody-Wide%20Bed5.JPG`
      ],
      desc: "Floating Nightstand Integration"
    },
    {
      name: "Stamford Bed",
      img: `${OSS_BASE_URL}/bed%20room4/Stamford%20Bed1.jpg`,
      images: [
        `${OSS_BASE_URL}/bed%20room4/Stamford%20Bed1.jpg`,
        `${OSS_BASE_URL}/bed%20room4/Stamford%20Bed2.jpg`
      ],
      desc: "High-Density Velvet Headboard"
    },
    {
      name: "Brixton Bed",
      img: `${OSS_BASE_URL}/bed%20room4/Brixton%20bed1.jpg`,
      images: [
        `${OSS_BASE_URL}/bed%20room4/Brixton%20bed1.jpg`,
        `${OSS_BASE_URL}/bed%20room4/Brixton%20bed2.jpg`,
        `${OSS_BASE_URL}/bed%20room4/Brixton%20bed3.jpg`
      ],
      desc: "Sculptural Wingback Form"
    }
  ],
  "Office Room": [
    {
      name: "Elena Desk",
      img: `${OSS_BASE_URL}/office%20room3/Elena%20Desk1.JPG`,
      images: [
        `${OSS_BASE_URL}/office%20room3/Elena%20Desk1.JPG`,
        `${OSS_BASE_URL}/office%20room3/Elena%20Desk2.jpg`
      ],
      tag: "NEW",
      desc: "Full-Grain Leather Writing Surface"
    },
    {
      name: "President Desk",
      img: `${OSS_BASE_URL}/office%20room4/President%20Desk.jpg`,
      images: [
        `${OSS_BASE_URL}/office%20room4/President%20Desk.jpg`,
        `${OSS_BASE_URL}/office%20room4/President%20writing-desk1.jpg`,
        `${OSS_BASE_URL}/office%20room4/President%20writing-desk2.jpg`,
        `${OSS_BASE_URL}/office%20room4/President%20writing-desk3.jpg`,
        `${OSS_BASE_URL}/office%20room4/President%20writing-desk4.jpg`,
        `${OSS_BASE_URL}/office%20room4/President%20writing-desk5.jpg`,
        `${OSS_BASE_URL}/office%20room4/President%20writing-desk6.jpg`,
        `${OSS_BASE_URL}/office%20room4/President%20writing-desk7.jpg`,
        `${OSS_BASE_URL}/office%20room4/President%20writing-desk8.jpg`
      ],
      desc: "Solid Beech Structure & Brass Accents"
    },
    {
      name: "Raglan Desk",
      img: `${OSS_BASE_URL}/office%20room4/Styal%20desk1.jpg`,
      images: [
        `${OSS_BASE_URL}/office%20room4/Styal%20desk1.jpg`,
        `${OSS_BASE_URL}/office%20room4/Styal%20desk2.jpg`,
        `${OSS_BASE_URL}/office%20room4/Styal%20desk3.jpg`,
        `${OSS_BASE_URL}/office%20room4/Styal%20desk4.jpg`
      ],
      desc: "Cantilevered Floating Top"
    },
    {
      name: "Stamboul Desk",
      img: `${OSS_BASE_URL}/office%20room3/Antigua%20desk1.JPG`,
      images: [
        `${OSS_BASE_URL}/office%20room3/Antigua%20desk1.JPG`,
        `${OSS_BASE_URL}/office%20room3/Antigua%20desk2.jpg`,
        `${OSS_BASE_URL}/office%20room3/Antigua%20desk3.jpg`,
        `${OSS_BASE_URL}/office%20room3/Antigua%20desk4.jpg`,
        `${OSS_BASE_URL}/office%20room3/Antigua%20desk5.jpg`,
        `${OSS_BASE_URL}/office%20room3/Antigua%20desk6.jpg`
      ],
      desc: "Hand-Matched Walnut Veneer"
    },
    {
      name: "Arrakis Desk",
      img: `${OSS_BASE_URL}/office%20room3/Arrakis%20Desk1.jpg`,
      images: [
        `${OSS_BASE_URL}/office%20room3/Arrakis%20Desk1.jpg`,
        `${OSS_BASE_URL}/office%20room3/Arrakis%20Desk2.jpg`,
        `${OSS_BASE_URL}/office%20room3/Arrakis%20Desk3.jpg`,
        `${OSS_BASE_URL}/office%20room3/Arrakis%20Desk4.jpg`,
        `${OSS_BASE_URL}/office%20room3/Arrakis%20Desk5.jpg`
      ],
      desc: "Aerodynamic Luxury Executive Curve"
    },
    {
      name: "Medusa Desk",
      img: `${OSS_BASE_URL}/office%20room3/Medusa%20Desk1.jpg`,
      images: [
        `${OSS_BASE_URL}/office%20room3/Medusa%20Desk1.jpg`,
        `${OSS_BASE_URL}/office%20room3/Medusa%20Desk2.jpg`,
        `${OSS_BASE_URL}/office%20room3/Medusa%20Desk3.jpg`
      ],
      desc: "Sculptural Executive Design"
    }
  ],
};

const CATEGORIES = ["Living Room", "Dining Room", "Bedroom", "Office Room"];
const navLeft = ["Home", "Products"];
const navRight = ["About us", "Contact us"];

const categoryStories: Record<string, { kicker: string; title: string; desc: string }> = {
  "Living Room": {
    kicker: "Living & Seating Collection",
    title: "Italian Sofa Architecture",
    desc: "Bespoke sofas and sectionals designed for discerning luxury residences. Engineered with mortise-and-tenon solid beech framing, multi-density ergonomic foam, and hand-stitched full-grain leathers.",
  },
  "Dining Room": {
    kicker: "Dining & Entertaining",
    title: "Monolithic Dining Pieces",
    desc: "Sculptural dining tables crafted from natural marble, exotic wood veneers, and reinforced brass structures. Each piece is proportioned to serve as the architectural centerpiece of the home.",
  },
  Bedroom: {
    kicker: "Rest & Sanctuary",
    title: "Master Bedroom Suites",
    desc: "Extra-wide headboards, wall-panel integrated systems, and bespoke tactile upholstery. Designed to create a cohesive luxury sanctuary with refined Italian detailing.",
  },
  "Office Room": {
    kicker: "Work & Executive",
    title: "Executive Desks & Studies",
    desc: "Executive desks combining saddle leather writing pads, solid beech wood curves, and precision-fitted storage tailored for prestigious private offices and boardrooms.",
  },
};

function ProductsPage() {
  const search = Route.useSearch();
  const initialCategory =
    search.category && search.category in productsByCategory
      ? search.category
      : "Living Room";

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [mobileVisibleCount, setMobileVisibleCount] = useState(8);
  const [pcPage, setPcPage] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  useEffect(() => {
    if (search.category && search.category in productsByCategory) {
      setActiveCategory(search.category);
      setMobileVisibleCount(8);
      setPcPage(1);
    }
  }, [search.category]);

  const currentProducts = productsByCategory[activeCategory] ?? [];
  const heroProduct = currentProducts[0] ?? {
    name: "Bespoke Collection",
    img: `${OSS_BASE_URL}/visio%20living%20room/Babylon%20Curved%20Sofa1.jpg`,
  };

  const story = categoryStories[activeCategory] ?? categoryStories["Living Room"];
  const mobileDisplayProducts = currentProducts.slice(0, mobileVisibleCount);

  const pcPageSize = 12;
  const totalPcPages = Math.max(1, Math.ceil(currentProducts.length / pcPageSize));
  const pcDisplayProducts = currentProducts.slice(
    (pcPage - 1) * pcPageSize,
    pcPage * pcPageSize
  );

  const activeImages = selectedProduct ? getProductImages(selectedProduct) : [];

  const openGallery = (product: Product) => {
    setSelectedProduct(product);
    setCurrentImgIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeGallery = () => {
    setSelectedProduct(null);
    setCurrentImgIndex(0);
    document.body.style.overflow = "auto";
  };

  const handleNextImage = () => {
    if (activeImages.length <= 1) return;
    setCurrentImgIndex((prev) => (prev + 1) % activeImages.length);
  };

  const handlePrevImage = () => {
    if (activeImages.length <= 1) return;
    setCurrentImgIndex((prev) => (prev - 1 + activeImages.length) % activeImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProduct) return;
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowRight") handleNextImage();
      if (e.key === "ArrowLeft") handlePrevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProduct, activeImages.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 40;
    const isRightSwipe = distance < -40;

    if (isLeftSwipe) handleNextImage();
    if (isRightSwipe) handlePrevImage();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex flex-col justify-between bg-black/95 text-white backdrop-blur-xl animate-fadeIn">
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-[--gold]">
                {activeCategory} · {currentImgIndex + 1} / {activeImages.length}
              </p>
              <h3 className="font-display text-lg font-light tracking-wider text-white">
                {selectedProduct.name}
              </h3>
            </div>
            <button
              onClick={closeGallery}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 active:scale-95"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div
            className="relative flex flex-1 items-center justify-center px-4 py-2 touch-pan-y select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {activeImages.length > 1 && (
              <button
                onClick={handlePrevImage}
                className="hidden md:flex absolute left-8 z-10 h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-110 active:scale-95"
                aria-label="Previous image"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            <div className="relative flex h-full max-h-[68vh] w-full max-w-5xl items-center justify-center">
              <img
                key={activeImages[currentImgIndex]}
                src={activeImages[currentImgIndex]}
                alt={`${selectedProduct.name} - image ${currentImgIndex + 1}`}
                className="h-full w-full object-contain transition-opacity duration-300"
              />
            </div>

            {activeImages.length > 1 && (
              <button
                onClick={handleNextImage}
                className="hidden md:flex absolute right-8 z-10 h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-110 active:scale-95"
                aria-label="Next image"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {activeImages.length > 1 && (
              <div className="md:hidden absolute bottom-3 flex gap-1.5">
                {activeImages.map((_, idx) => (
                  <span
                    key={idx}
                    className={`h-1.5 rounded-full transition-all ${
                      currentImgIndex === idx ? "w-6 bg-[--gold]" : "w-1.5 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-white/10 bg-black/60 px-6 py-4 backdrop-blur-md">
            <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-3 sm:flex-row">
              <div className="text-center sm:text-left">
                <p className="text-xs text-neutral-300">
                  {selectedProduct.desc ?? "Curved Solid Beech Wood Frame · Hand-Crafted in Foshan"}
                </p>
                <p className="text-[10px] text-neutral-500 mt-0.5">
                  Swipe left/right to browse details ({currentImgIndex + 1}/{activeImages.length}) · Bespoke sizing available
                </p>
              </div>

              <a
                href={`https://wa.me/8618926150696?text=${encodeURIComponent(
                  `Hi FMANAR, I want to inquire about custom sizing/pricing for the ${selectedProduct.name} (${activeCategory}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto rounded bg-[#93302c] px-6 py-2.5 text-center text-xs font-medium uppercase tracking-[0.2em] text-white shadow-lg transition-all hover:bg-black active:scale-95"
              >
                Inquire on WhatsApp →
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="block md:hidden bg-white text-black min-h-screen">
        <header className="sticky top-0 z-50 flex items-center justify-between bg-black px-5 py-3.5">
          <Link to="/" className="flex flex-col">
            <span className="text-[7px] tracking-[0.35em] text-neutral-400">MORE PHILOSOPHY</span>
            <span className="font-display text-xl font-bold tracking-[0.25em] text-white">FMANAR</span>
          </Link>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/8618926150696?text=Hi%20FMANAR%2C%20I%20would%20like%20to%20inquire%20about%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact on WhatsApp"
              className="text-white/80 hover:text-white"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
              className="flex flex-col justify-center gap-1 text-white"
            >
              <span className="block h-0.5 w-5 bg-white transition-all" />
              <span className="block h-0.5 w-5 bg-white transition-all" />
            </button>
          </div>
        </header>

        {menuOpen && (
          <div className="fixed inset-x-0 top-[53px] z-40 bg-black/95 px-6 py-8 backdrop-blur-xl border-b border-neutral-800 space-y-6 text-white">
            <nav className="flex flex-col space-y-4 text-sm font-medium uppercase tracking-[0.25em]">
              <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-[--gold]">
                Home
              </Link>
              <Link to="/products" onClick={() => setMenuOpen(false)} className="text-[--gold]">
                Products
              </Link>
              <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-[--gold]">
                About Us
              </Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-[--gold]">
                Contact
              </Link>
            </nav>
          </div>
        )}

        <section className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
          <img
            src={heroProduct.img}
            alt={activeCategory}
            className="h-full w-full object-cover brightness-[0.9]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <h1 className="absolute bottom-5 left-5 font-display text-3xl font-light text-white tracking-wide">
            {activeCategory}
          </h1>
        </section>

        <section className="px-5 py-7 border-b border-neutral-200">
          <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-semibold">
            {story.kicker}
          </p>
          <h2 className="mt-2 font-display text-2xl font-normal leading-snug text-neutral-900">
            {story.title}
          </h2>
          <p className="mt-3 text-xs leading-relaxed text-neutral-600">
            {story.desc}
          </p>
        </section>

        <div className="sticky top-[53px] z-30 border-b border-neutral-200 bg-white/95 backdrop-blur-md">
          <div className="flex gap-2 overflow-x-auto px-5 py-3 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setMobileVisibleCount(8);
                }}
                className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-[11px] uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? "bg-black text-white font-medium"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between border-t border-neutral-100 px-5 py-2 text-[10px] uppercase tracking-widest text-neutral-400">
            <span>Showing {currentProducts.length} Pieces</span>
            <span>Tap to View Details</span>
          </div>
        </div>

        <section className="p-4">
          <div className="grid grid-cols-2 gap-x-3 gap-y-8">
            {mobileDisplayProducts.map((p) => (
              <div
                key={p.name}
                onClick={() => openGallery(p)}
                className="group flex flex-col cursor-pointer"
              >
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-md bg-[#f6f6f6] border border-neutral-200/60 p-2.5 flex items-center justify-center">
                  {p.tag && (
                    <span className="absolute left-2 top-2 rounded bg-black px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wider text-white">
                      {p.tag}
                    </span>
                  )}
                  <span className="absolute right-2 top-2 rounded bg-black/60 px-1.5 py-0.5 text-[8px] tracking-wider text-white">
                    Photos
                  </span>
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-2.5 space-y-0.5">
                  <h3 className="text-xs font-semibold text-neutral-900 truncate">
                    {p.name}
                  </h3>
                  <p className="text-[10px] text-neutral-500 truncate">
                    {p.desc ?? "Solid Beech Wood Frame"}
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[9px] uppercase tracking-wider text-neutral-400">
                      {activeCategory}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-[#93302c] font-medium">
                      View Details →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {mobileVisibleCount < currentProducts.length && (
            <div className="mt-10 mb-6 text-center">
              <button
                onClick={() => setMobileVisibleCount((prev) => prev + 8)}
                className="w-full border border-black py-3 text-xs uppercase tracking-[0.2em] font-medium text-black transition-colors active:bg-black active:text-white"
              >
                Show More ({currentProducts.length - mobileVisibleCount} Remaining)
              </button>
            </div>
          )}
        </section>

        <footer className="bg-[#24272a] px-6 py-12 text-white">
          <div className="text-center space-y-6">
            <div className="flex flex-col items-center">
              <span className="text-[8px] tracking-[0.4em] text-neutral-400">MORE PHILOSOPHY</span>
              <span className="font-display text-3xl font-bold tracking-[0.3em] mt-1">FMANAR</span>
            </div>

            <nav className="flex flex-col gap-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-200">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/products" search={{ category: "Living Room" }}>Living</Link>
              <Link to="/products" search={{ category: "Dining Room" }}>Dining</Link>
              <Link to="/products" search={{ category: "Bedroom" }}>Bedroom</Link>
              <Link to="/contact">Contacts</Link>
            </nav>

            <div className="pt-2 flex flex-col gap-3 text-xs uppercase tracking-[0.2em] text-neutral-300">
              <span className="text-[10px] tracking-[0.25em] text-[--gold] font-semibold">CUSTOMER SERVICE</span>
              <Link to="/delivery" className="hover:text-white transition-colors">Delivery</Link>
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/shipping-policy" className="hover:text-white transition-colors">Shipping Policy</Link>
              <Link to="/return-and-refunds" className="hover:text-white transition-colors">Return and Refunds</Link>
              <Link to="/important-notice" className="hover:text-white transition-colors">Important Notice</Link>
            </div>

            <div className="border-t border-neutral-700 pt-6 space-y-5">
              <div className="flex items-center justify-center gap-6 text-white/80">
                <a
                  href="https://www.instagram.com/foshanfmanarfurniture/?hl=en-gb"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="transition-colors hover:text-[--gold]"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>

              <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                Foshan Production Base & Showroom
              </p>
              <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-500">
                © 2026 FMANAR Maison — All rights reserved
              </p>
            </div>
          </div>
        </footer>
      </div>

      <div className="hidden md:block">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-[1600px] items-center justify-between px-8 py-5">
            <nav className="hidden flex-1 basis-0 items-center justify-end gap-10 text-xs font-medium uppercase tracking-[0.18em] text-foreground/85 md:flex">
              {navLeft.map((n) => (
                <Link
                  key={n}
                  to={n === "Products" ? "/products" : "/"}
                  className={`whitespace-nowrap transition-colors hover:text-[--gold] ${n === "Products" ? "text-[--gold]" : ""}`}
                >
                  {n}
                </Link>
              ))}
            </nav>

            <Link to="/" className="flex shrink-0 flex-col items-center px-10 text-foreground">
              <span className="text-[10px] tracking-[0.4em] text-muted-foreground">MORE PHILOSOPHY</span>
              <span className="font-display text-3xl tracking-[0.35em]">&nbsp;FMANAR</span>
            </Link>

            <nav className="hidden flex-1 basis-0 items-center justify-start gap-10 text-xs font-medium uppercase tracking-[0.18em] text-foreground/85 md:flex">
              {navRight.map((n) => (
                <Link
                  key={n}
                  to={n === "About us" ? "/about" : "/contact"}
                  className="whitespace-nowrap transition-colors hover:text-[--gold]"
                >
                  {n}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-[1600px] px-8 pt-32 pb-24">
          <div className="flex gap-12">
            <aside className="w-64 shrink-0">
              <div className="sticky top-32 space-y-6">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-[--gold] mb-4 font-semibold">
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          setActiveCategory(cat);
                          setPcPage(1);
                        }}
                        className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                          activeCategory === cat
                            ? "bg-neutral-800 text-[--gold] font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-neutral-900/50"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            <div className="flex-1">
              <div className="mb-8 flex items-center justify-between border-b border-border/30 pb-4">
                <h1 className="text-2xl font-light tracking-wider font-display">
                  {activeCategory}
                </h1>
                <span className="text-xs text-muted-foreground">
                  Showing {currentProducts.length} pieces
                </span>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {pcDisplayProducts.map((p) => (
                  <div
                    key={p.name}
                    onClick={() => openGallery(p)}
                    className="group block overflow-hidden rounded-lg border border-border/30 bg-neutral-950/40 p-3 transition-all hover:border-[--gold]/50 cursor-pointer"
                  >
                    <div className="aspect-[3/2] overflow-hidden rounded bg-black/40">
                      <img
                        src={p.img}
                        alt={p.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <p className="text-sm font-medium text-foreground truncate">
                        {p.name}
                      </p>
                      <span className="text-xs text-[--gold] opacity-0 transition-opacity group-hover:opacity-100">
                        View Details →
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {totalPcPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-4 text-sm">
                  <button
                    onClick={() => setPcPage((p) => Math.max(1, p - 1))}
                    disabled={pcPage === 1}
                    className="rounded border border-border/40 px-5 py-2 transition-colors hover:bg-neutral-800 disabled:opacity-30"
                  >
                    Previous
                  </button>
                  <span className="text-muted-foreground">
                    Page {pcPage} of {totalPcPages}
                  </span>
                  <button
                    onClick={() => setPcPage((p) => Math.min(totalPcPages, p + 1))}
                    disabled={pcPage === totalPcPages}
                    className="rounded border border-border/40 px-5 py-2 transition-colors hover:bg-neutral-800 disabled:opacity-30"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>

        <footer className="border-t border-border/40 px-8 py-16 bg-background">
          <div className="mx-auto grid max-w-[1600px] gap-10 md:grid-cols-4">
            <div>
              <p className="font-display text-2xl tracking-[0.3em]">F M A N A R</p>
              <div className="mt-4 max-w-xs space-y-1 text-xs leading-relaxed text-muted-foreground">
                <p>Address: No. 9 Zhenxing Road, Mailang Village, Longjiang Town, Shunde District, Foshan City, Guangdong Province, China</p>
                <p>Business hours: 09:00 - 18:00 (UTC+8)</p>
              </div>
            </div>

            {[
              { h: "COLLECTIONS", l: ["Living", "Bedroom", "Dining", "Office"] },
              {
                h: "CUSTOMER SERVICE",
                l: ["Delivery", "Privacy Policy", "Shipping Policy", "Return and Refunds", "Important Notice"],
              },
              { h: "CONTACT US", l: ["Feedback"] },
            ].map((col) => (
              <div key={col.h}>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[--gold]">{col.h}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {col.l.map((x) => {
                    const route = customerServiceRoutes[x];
                    return (
                      <li key={x}>
                        {route ? (
                          <Link to={route.to} search={route.search} className="transition-colors hover:text-foreground">
                            {x}
                          </Link>
                        ) : (
                          <a href="#" className="hover:text-foreground">{x}</a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-[1600px] text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
            © 2026 FMANAR MAISON — ALL RIGHTS RESERVED
          </p>
        </footer>
      </div>
    </div>
  );
}
