interface galleryEntryProps {
  title?: string;
  imgsrc?: string;
  desc?: string;
  link?: string;
}

export default function GalleryEntry(props: galleryEntryProps) {
  return (
    <div className='border roundCorners scroll'>
      <a href={props.link} target='_blank'>
        <img src={props.imgsrc} alt='image not found' />
      </a>
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </div>
  );
}
