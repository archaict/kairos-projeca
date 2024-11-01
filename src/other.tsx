import { Button } from './components/buttonConfig';

// {Variant -> classname}

function Other({ children }: { children: React.ReactNode }) {
  return (
    <Button
      variant='secondary'
      className='m-[4px]'
    >{children}</Button>
  );
}

export default Other;
