import { Layout } from '@/components/layouts';
import Button from '@/components/ui/buttons/Button';
import paths from '@/configs/routes';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Layout>
      <div className='my-10'>
        <div className="flex flex-col items-center justify-center">
          <div className="text-[110px] font-medium">404 Not Found</div>
          <div className="text-base mt-[50px]">
            Your visited page not found. You may go home page.
          </div>
          <Link
            to={paths.INDEX_PATH}
            className="text-white text-base bg-danger px-[30px] py-[20px] rounded-md mt-10"
          >
            Back to home page
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default NotFound;
