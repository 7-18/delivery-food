import { BannersDiv, BannersItem } from "./BannersStyles";
import { banners } from "../../data/banners";

export const Banners = () => {
  return (
    <>
      <BannersDiv>
        {banners.map((banner) => {
          return (
            <BannersItem key={banner.id}>
              <img src={banner.img} alt={banner.title} loading="lazy"/>
            </BannersItem>
          );
        })}
      </BannersDiv>
    </>
  );
};
