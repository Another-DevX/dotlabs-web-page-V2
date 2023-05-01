import { workshops } from "@/data/workshops";
import { BackToHomeButton } from "../buttons/BackToHomeButton";
import { WorkshopCard } from "./WorkshopCard";

const isOddIndex = (index: number): boolean => {
  return index % 2 === 1;
};

export const WorkshopsList = () => {
  return (
    <div className="workshopList">
      <BackToHomeButton />
      {workshops.map((w, i) => {
        return (
          <WorkshopCard
            title={w.title}
            date={w.date}
            tags={w.tags}
            speakers={w.speakers}
            description={w.description}
            key={`${i}_${w.title}`}
            location={w.location}
            theme={isOddIndex(i) ? "dark" : "colorful"}
            imgUrl={""}
          />
        );
      })}
    </div>
  );
};
