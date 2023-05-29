import React from 'react';
import { useParams } from 'umi';

interface Params {
  id: string;
}

export default function Detail() {
  const params = useParams<Params>();
  // console.log(params);

  return <div>Detail-{params.id}</div>;
}
