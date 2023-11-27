import React, { useEffect, useState, useRef } from "react";
export default function OnboardingFlow() {
  const { logo } = useLogo();
  const [modalVisible, setModalVisible] = useState(false);
  const modalRef = useRef(null);
  useEffect(() => {
    if (modalVisible) {
      modalRef.current.showModal();
    }
  }, [modalVisible]);
  // Rest of the code...
  {modalVisible && <OnboardingModal ref={modalRef} setModalVisible={setModalVisible} />}
}
  }, [modalVisible]);

  function showModal() {
    setModalVisible(true);
  }

  if(isMobile) {
    return(
      <div className="w-screen h-full bg-sidebar flex items-center justify-center">
      <div className="w-fit p-20 py-24 border-2 border-slate-300/10 rounded-2xl bg-main-gradient shadow-lg">
        <div className="text-white text-2xl font-base text-center">
          Welcome to
        </div>
        <img src={logo} alt="logo" className="w-80 mx-auto m-3 mb-11" />
        <div className="flex justify-center items-center">
          <p className="text-white text-xl italic text-center">
            Please use a desktop browser to continue.
          </p>
        </div>
      </div>
    </div>
    )
    }

  return (
    <div className="w-screen h-full bg-sidebar flex items-center justify-center">
      <div className="w-fit p-20 py-24 border-2 border-slate-300/10 rounded-2xl bg-main-gradient shadow-lg">
        <div className="text-white text-2xl font-base text-center">
          Welcome to
        </div>
        <img src={logo} alt="logo" className="w-80 mx-auto m-3 mb-11" />
        <div className="flex justify-center items-center">
          <button
            className="border border-slate-200 px-5 py-2.5 rounded-lg text-slate-800 bg-slate-200 text-sm items-center flex gap-x-2 hover:text-white hover:bg-transparent focus:ring-gray-800 font-semibold shadow animate-pulse"
            onClick={showModal}
          >
            Get Started
          </button>
        </div>
      </div>
      {modalVisible &&
        <OnboardingModal setModalVisible={setModalVisible} />
      }
    </div>
  );
}
