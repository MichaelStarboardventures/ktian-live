import { Outlet } from 'umi';
import { Container } from '@/layouts/components/container';

const Layouts = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default Layouts;
