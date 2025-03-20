type Side = 'left' | 'right';

interface cardProps {
  title?: string;
  text?: string;
  imgsrc?: string;
  side?: Side;
}

export default function Card(props: cardProps) {
  return (
    <div
      className='sideBySide border roundCorners card'
      style={
        props.side == 'left'
          ? { justifyContent: 'left' }
          : { justifyContent: 'right' }
      }
    >
      {props.side == 'left' && <img src={props.imgsrc} alt='image not found' />}
      <div>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
      {props.side == 'right' && (
        <img src={props.imgsrc} alt='image not found' />
      )}
    </div>
  );
}
