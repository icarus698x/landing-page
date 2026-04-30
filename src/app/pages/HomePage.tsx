import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Security } from "../components/Security";
import { MoreFeatures } from "../components/MoreFeatures";
import { ClosingCTA } from "../components/ClosingCTA";

export function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Security />
      <MoreFeatures />
      <ClosingCTA />
    </>
  );
}
