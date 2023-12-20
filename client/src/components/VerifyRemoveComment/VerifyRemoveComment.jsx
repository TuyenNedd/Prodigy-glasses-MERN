import ButtonSolid from "../ButtonSolid/ButtonSolid.jsx";
import Loading from "../LoadingComponent/Loading.jsx";

const VerifyRemoveComment = ({ cancelBut, deleteBut, loadingDelete }) => {
  return (
    <>
      <div className="submission-modal">
        <div className="review-form fixed top-0 left-0 w-screen h-full z-[100] transition-all duration-300 bg-[#000000b3] overflow-auto flex">
          <div className="modal-container rounded-md bg-white relative max-w-2xl w-fit mx-auto my-auto py-6 px-4">
            <div className="modal-body">
              <div className="warning-text pb-4 mb-6 border-b-[0.8px] border-[#0000001f]">
                <div className="ITCGara text-2xl mb-1">Warning!</div>
              </div>
              <p className="text-base ITCGara mb-6">
                Are you sure you want to delete this comment?
              </p>
              <div className="submit-review flex gap-2">
                <Loading isLoading={loadingDelete}>
                  <ButtonSolid
                    //   onClick={() => }
                    onClick={deleteBut}
                    child={"REMOVE NOW"}
                    customClass={"text-lg"}
                  ></ButtonSolid>
                </Loading>

                <div>
                  <button
                    onClick={cancelBut}
                    className="TradeGodthic-BoldCn text-lg py-3 px-6 border-black border-[1px] inline-flex rounded-md transition-all duration-300 hover:text-white hover:bg-black"
                  >
                    LEAVE & CANCEL REMOVE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyRemoveComment;
