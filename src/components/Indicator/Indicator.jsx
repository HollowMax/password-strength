import { useEffect, useRef } from 'react';

export default function Indicator({ validate }) {
  const listRef = useRef();

  useEffect(() => {
    switch (validate) {
      case 'short':
        for (const el of listRef.current.children) {
          el.children[0].style.backgroundColor = 'red';
        }
        break;

      case 'easy':
        for (const el of listRef.current.children) {
          el.children[0].style.backgroundColor = 'grey';
        }
        listRef.current.children[0].children[0].style.backgroundColor = 'red';
        break;

      case 'medium':
        for (const el of listRef.current.children) {
          el.children[0].style.backgroundColor = 'yellow';
        }
        listRef.current.children[2].children[0].style.backgroundColor = 'grey';
        break;

      case 'strong':
        for (const el of listRef.current.children) {
          el.children[0].style.backgroundColor = 'green';
        }
        break;

      default:
        for (const el of listRef.current.children) {
          el.children[0].style.backgroundColor = 'grey';
        }
    }
  }, [validate]);

  return (
    <ul className="indicator-list" ref={listRef}>
      <li>
        <div className="indicator"></div>
      </li>
      <li>
        <div className="indicator"></div>
      </li>
      <li>
        <div className="indicator"></div>
      </li>
    </ul>
  );
}
