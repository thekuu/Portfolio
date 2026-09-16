import Hero from '@/components/home/Hero';
import Intro from '@/components/home/Intro';
import SelectedWork from '@/components/home/SelectedWork';
import SystemMap from '@/components/home/SystemMap';
import HowIBuild from '@/components/home/HowIBuild';
import BuiltNotJustDesigned from '@/components/home/BuiltNotJustDesigned';
import ContactCTA from '@/components/home/ContactCTA';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Intro />
      <SelectedWork />
      <SystemMap />
      <HowIBuild />
      <BuiltNotJustDesigned />
      <ContactCTA />
    </div>
  );
}
