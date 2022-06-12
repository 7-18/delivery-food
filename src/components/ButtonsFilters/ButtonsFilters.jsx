import { ButtonFilter, DivButtons } from "./ButtonsFiltersStyles";

export default function ButtonsFilters({
  category,
  restaurants,
  handleClick,
  menu,
}) {
  return (
    <>
      <DivButtons>
        {category
          ? category.map((item) => (
              <ButtonFilter
                key={item.id}
                id={item.id}
                className={`${item.className} ${
                  item.active === true ? "active" : "disabled"
                }`}
                onClick={handleClick}
                value={item.name}
              >
                {item.name}
              </ButtonFilter>
            ))
          : menu.map((item) => (
              <ButtonFilter
                key={item.id}
                id={item.id}
                className={`${item.className} ${
                  item.active === true ? "active" : "disabled"
                }`}
                onClick={handleClick}
                value={item.category}
              >
                {item.category}
              </ButtonFilter>
            ))}
      </DivButtons>
    </>
  );
}
