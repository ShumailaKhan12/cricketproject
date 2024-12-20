import News from "@/Components/News/news";
import Navbar from "@/Components/navbar/navbar";
import MatchCards from "./match-details/page";

export default function Home() {
  return (
<div>
  <Navbar/>
  <MatchCards/>
  <News/>
</div>
  );
}
