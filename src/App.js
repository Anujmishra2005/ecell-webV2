import MainRoutingPage from './component/MainRoutingPage';
import HomePage from './component/pages/HomePage';
import ImageSlider from './component/pages/Achievements/Achievements';

function App() {
  const images = [
    'https://media.licdn.com/dms/image/C4D22AQFIrl_mWPJARA/feedshare-shrink_1280/0/1675589029920?e=1707955200&v=beta&t=1T5rr0pZDEGJCOwIfDxu1jzhWmzgAoaWCshuI3b78gk',
    'https://media.licdn.com/dms/image/C4D22AQFQliwhaPUXBw/feedshare-shrink_1280/0/1668370094338?e=1707955200&v=beta&t=vk37k8UyINk-Gdf7Q3kynLnpCbJkuyDOakc-zi5b3ms',
    'https://media.licdn.com/dms/image/C4D22AQGTjYDmgG_4fg/feedshare-shrink_800/0/1668245275299?e=1707955200&v=beta&t=F_xVFzsf5E9m9fOX1tYZzW2ldrms7XMu5YJUk_15kjg',
    // Add more image URLs as needed
  ];
  return (
    <>
    {/* <div>
      <h1>Image Slider</h1>
      <ImageSlider images={images} />
    </div> */}
    {/* <HomePage/> */}
    <MainRoutingPage/>
     </>
  );
}

export default App;
