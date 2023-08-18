import { MutatingDots } from 'react-loader-spinner';

function Loader() {
  return (
    <MutatingDots
      height='100'
      width='100'
      color='#fff'
      secondaryColor='#fff'
      radius='12.5'
      visible
    />
  );
}

export default Loader;
