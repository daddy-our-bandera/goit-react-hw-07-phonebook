import { ThreeDots } from 'react-loader-spinner';
import { LoadBox } from './Loader.styled';
export const Loader = () => {
  return (
    <LoadBox>
      <ThreeDots
        height="40"
        width="40"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoadBox>
  );
};
