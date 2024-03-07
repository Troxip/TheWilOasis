import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import { Modal } from "../../ui/Modal";

export default function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>

      {/* <Modal.Open opens="table">
        <Button>Show table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CreateCabinForm />
      </Modal.Window> */}
    </Modal>
  );
}

// export default function AddCabin() {
// const [isOpenModal, setIsOpenModal] = useState(false);

// return (
//   <div>
//     <Button onClick={() => setIsOpenModal(!isOpenModal)}>
//       Add new cabin
//     </Button>
//     {isOpenModal && (
//       <Modal onClose={() => setIsOpenModal(false)}>
//         <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//       </Modal>
//     )}
//   </div>
// );
// }
