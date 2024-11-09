import { CardsResult } from "@/components/cardsResult";
import { ChartGraph } from "@/components/chartGraph";

export default function Home() {
  return (
    <>
      <div className="sm:ml-14 p-4">
        <CardsResult />
      </div>

      <div className="sm:ml-14 p-4">
      <ChartGraph/>
      </div>
      
      

    </>


  );
}
