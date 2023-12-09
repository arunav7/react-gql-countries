import { useEffect } from 'react';
import {
  useNavigate,
  useLocation
} from 'react-router-dom';

export const AllLanguages = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/', {
        state: {
          previousPath: location.pathname,
          message: 'Navigated back from Languages'
        }
      });
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigate, location]);
  return (
    <h1>
      Under Development....Please Check back later
    </h1>
  );
};
