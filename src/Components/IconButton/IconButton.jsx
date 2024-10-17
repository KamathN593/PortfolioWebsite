import './IconButton.css'
import instaIcon from '../../assets/iconInstagramSolid.png'

export const IconButton = ({bg, btnText, textColor}) => {
      // Map props to Tailwind class names
    const bgClass = `bg-${bg}`;
    const textClass = `text-${textColor}`;

    return (
        <button className={`${bgClass} ${textClass} py-4 px-7 rounded`}>
      {btnText}
    </button>
        
  );
};

export default IconButton;