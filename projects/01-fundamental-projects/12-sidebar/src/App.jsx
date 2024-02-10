import { Hero } from "./components/Hero";
import { SidebarContainer } from "./components/SidebarContainer";
import { useGlobalContext } from "./context/Context";

function App() {
  const { showModal, modalContRef, handleModal } = useGlobalContext();

  const modalContainerClass = showModal
    ? "modal-container show-modal"
    : "modal-container";

  return (
    <main>
      <SidebarContainer></SidebarContainer>
      <Hero></Hero>

      <section className={modalContainerClass} ref={modalContRef}>
        <article className="modal">
          <h2 className="modal-heading">This is a Modal content</h2>
          <button className="btn" onClick={handleModal}>
            close modal
          </button>
        </article>
        <div className="modal-overlay" onClick={handleModal}></div>
      </section>
    </main>
  );
}

export default App;
