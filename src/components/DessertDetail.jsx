import { useParams } from 'react-router-dom';

export default function Dessertdetail() {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>Detail comes here</h1>
    </div>
  );
}
