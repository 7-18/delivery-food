import { GlobalButton, GlobalButtonName } from "./InputsButtonStyles";

export const InputsButton = ({ title, icon, lastIcon }) => {
  return (
    <div style={{ gap: "10px " }}>
      <GlobalButton>
        <GlobalButtonName>
          {icon}
          <span className="title-edit">{title}</span>
          {lastIcon}
        </GlobalButtonName>
      </GlobalButton>
    </div>
  );
};
