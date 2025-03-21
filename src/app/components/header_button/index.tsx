import "./index.css"

export interface ButtonInterface {
    element: string;
    label: string;
} 


export default function HeaderButton(props: ButtonInterface ) {

  const handleClick = () => {
    const section = document.getElementById(props.element);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button onClick={handleClick} className="header-button">
      {props.label}
    </button>
  );
}