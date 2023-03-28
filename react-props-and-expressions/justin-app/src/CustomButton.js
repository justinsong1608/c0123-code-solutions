import './CustomButton.css';

export default function CustomButton({ text, color }) {
  return <button className={ color }>{ text }</button>;
}
