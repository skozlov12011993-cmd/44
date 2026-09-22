import { Hero } from "@/components/landing/hero";
import { Engineers } from "@/components/landing/engineers";
import { Steps } from "@/components/landing/steps";
import { Kits } from "@/components/landing/kits";
import { Operators } from "@/components/landing/operators";
import { Advantages } from "@/components/landing/advantages";
import { Articles } from "@/components/landing/articles";
import { Reviews } from "@/components/landing/reviews";
import { Contacts } from "@/components/landing/contacts";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Steps />
      <Kits />
      <Engineers />
      <Operators />
      <Advantages />
      <Articles />
      <Reviews />
      <Contacts />
    </>
  );
}
