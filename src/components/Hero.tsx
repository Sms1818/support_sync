import { useNavigate } from 'react-router-dom';
import '../App.css';
import { BackgroundGradient } from './Background'; // Import your BackgroundGradient component

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <BackgroundGradient className="hero">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-black sm:text-6xl">
              Lorem ipsum dolor sit amet
            </h1>
            <p className="mt-6 text-lg leading-8 text-black-300">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={() => navigate('/dashboard')}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </BackgroundGradient>
  );
};

export default Hero;
