import { useOutletContext } from 'react-router-dom';

export default function HostDsInfo() {
  const { dsDetail } = useOutletContext();

  return (
    <section className="host--ds--detail--info">
      <h4>
        Name: <span>{dsDetail.name}</span>
      </h4>
      <h4>
        category: <span>{dsDetail.type}</span>
      </h4>
      <h4>
        Description: <span>{dsDetail.description}</span>
      </h4>
    </section>
  );
}
