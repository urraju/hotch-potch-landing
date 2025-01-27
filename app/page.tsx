import AiSection from "@/components/AiSection/AiSection";
import Banner from "@/components/Banner/Banner";
import Customer from "@/components/Customer/Customer";
import CustomerLogo from "@/components/CustomerLogo/CustomerLogo";
import GenerateAiWeb from "@/components/GenerateAiWeb/GenerateAiWeb";
import Navbar from "@/components/Navbar/Navbar";
import WritingTools from "@/components/WritingTools/WritingTools";

 

export default function Home() {
  return (
    <div className="max-w-[1600px] mx-auto px-2 lg:px-0">
      <Navbar/>
      <Banner/>
      <CustomerLogo/>
      <AiSection/>
      <WritingTools/>
      <GenerateAiWeb/>
      <Customer/>
    </div>
  );
}
