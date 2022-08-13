
import logo from './assets/images/oa-logo.png';
import logoWhite from './assets/images/oa-logo-white.png';

function App() {
  return (
    <div className="w-full h-screen">
      <div className='w-full flex h-full hero-image bg-center hero-overlay md:no-hero'>

        {/* Box 1 */}
        <div className='px-8 flex flex-col md:px-16 w-12/12 md:w-6/12'>
          <div className=" w-full font-medium flex gap-14 py-4 ">
            <div className='flex gap-12 w-full'>
              <img src={logo} alt="" className="w-auto h-16 hidden md:inline-block" />
              <img src={logoWhite} alt="" className="w-auto h-12  md:hidden" />
              <div className="hidden gap-12 md:flex">
                <button className="text-white md:text-[#6b7280] cursor-pointer my-auto ">About OA</button>
                <button className="text-white md:text-[#6b7280] cursor-pointer my-auto">About SP</button>
                <button className=" text-white md:text-[#0058ff] cursor-pointer my-auto">Login</button>
              </div>
              <button className="text-white md:text-[#0058ff] cursor-pointer my-auto ml-auto">
                <span className="material-icons text-white">menu</span>
              </button>
            </div>
          </div>
          <div className=' my-auto'>
            <div className='grid font-bold text-3xl sm:text-5xl md:text-7xl'>
              <span className='text-white md:text-[#161E2E]'>Data to enrich your</span> <span className='text-white md:text-[#0058FF]'>offshore business</span>
            </div>
            <div className='text-white md:text-[#6b7280] text-md md:text-2xl py-2 pb-8 md:py-8'>
              Anim aute id magna aliqua ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam accaet fuigiat aliqua.
            </div>
            <div className='flex gap-2 md:gap-4 font-semibold '>
              <button className='bg-[#0058FF] text-white px-3 py-2 md:px-8 md:py-4 rounded-md text-md md:text-lg   hover:bg-[#0047ca]'>Get Started</button>
              <button className='bg-[#E5EDFF] text-[#0058FF] px-3 py-2 md:px-8 md:py-4 rounded-md text-md md:text-lg   hover:bg-[#ccdafa]'>View recent leads</button>
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className='w-12/12 md:w-6/12 hero-image hero-clip hidden md:inline-block'>
        </div>

      </div>
    </div>
  );
}

export default App;
