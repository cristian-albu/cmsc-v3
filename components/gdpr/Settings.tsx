import { E_GdprNames, T_GdprState, useGdprContext } from "@/lib/contexts/GdprContext";
import { useLangContext } from "@/lib/contexts/LangContext";
import React, { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";
import Button from "../button";
import { Checkbox } from "../inputs";
import Typography from "../typography";
import { acceptDefault, refuseDefault, settingsData } from "./data";

const Settings: FC<{
  showModal: boolean;
  body: HTMLElement | null;
  handleCloseModal: () => void;
  saveCookieChoices: (state: T_GdprState) => void;
}> = ({ showModal, body, handleCloseModal, saveCookieChoices }) => {
  const { langState } = useLangContext();
  const { gdprState, updateGdprState } = useGdprContext();

  const { closeBtn, title, saveBtn, acceptAllBtn, refuseAllBtn, essential, preferences, analytics, advertisement } =
    settingsData[langState];
  const settingsBoxesArr = [essential, preferences, analytics, advertisement];

  const [checkedState, setCheckedState] = useState<T_GdprState>(gdprState);

  const handleUpdateLocalState = (name: E_GdprNames) => {
    setCheckedState((prev) => ({
      ...prev,
      [E_GdprNames[name]]: !prev[E_GdprNames[name]],
    }));
  };

  const handleRefuseAll = () => {
    setCheckedState(refuseDefault);
    updateGdprState(refuseDefault);
    saveCookieChoices(refuseDefault);
    handleCloseModal();
  };

  const handleAcceptAll = () => {
    setCheckedState(acceptDefault);
    updateGdprState(acceptDefault);
    saveCookieChoices(acceptDefault);
    handleCloseModal();
  };

  const handleSaveSettings = () => {
    updateGdprState(checkedState);
    saveCookieChoices(checkedState);
    handleCloseModal();
  };

  const handleCloseButton = () => {
    setCheckedState(gdprState);
    handleCloseModal();
  };

  useEffect(() => {
    setCheckedState(gdprState);
  }, [gdprState]);

  return (
    <>
      {body &&
        showModal &&
        createPortal(
          <div className="fixed top-0 left-0 w-full h-[100vh] flex justify-center items-center p-[2rem]">
            <div
              className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.5]"
              role="button"
              aria-label={closeBtn}
              onClick={handleCloseButton}
            />
            <div className="relative w-full max-w-[700px] h-[70vh] bg-white rounded-md shadow-xl overflow-scroll overflow-x-hidden">
              <div className="sticky top-0 left-0 w-full flex items-center bg-white px-10 pt-5 pb-2 shadow-md">
                <Typography level={2} className="mb-0">
                  {title}
                </Typography>
                <Button tertiary className="ml-auto" onClick={handleCloseButton}>
                  <IoMdClose /> {closeBtn}
                </Button>
              </div>
              <div className="w-full flex flex-col p-10 gap-5">
                {settingsBoxesArr.map((item, index) => {
                  return (
                    <div key={index.toString()}>
                      <Typography level={3}>{item.title}</Typography>
                      <Typography>{item.explanation}</Typography>
                      <Checkbox
                        disabled={item.name === "essential"}
                        checked={checkedState[E_GdprNames[item.name]]}
                        onChange={() => handleUpdateLocalState(item.name)}
                      >
                        {item.title}
                      </Checkbox>
                    </div>
                  );
                })}

                <div className="w-full flex gap-5">
                  <Button secondary onClick={handleRefuseAll}>
                    <IoMdClose /> {refuseAllBtn}
                  </Button>
                  <Button secondary className="mr-auto" onClick={handleAcceptAll}>
                    ✅ {acceptAllBtn}
                  </Button>
                  <Button onClick={handleSaveSettings}>💾 {saveBtn}</Button>
                </div>
              </div>
            </div>
          </div>,
          body
        )}
    </>
  );
};

export default Settings;
