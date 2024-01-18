import { useOutletContext } from 'react-router-dom';

export default function HostDsPricing() {
  const { dsDetail } = useOutletContext();
  return (
    <h3 className="host--ds--price">
      ${dsDetail.price}
      <span>/per</span>
    </h3>
  );
}
