import { useHistory } from 'react-router';
import sad from '../../assets/svg/sad.svg';
import back from '../../assets/svg/back.svg';
import ErrTrainingModalStyled from './ErrTrainingModalStyled';

const ErrTrainingModal = ({ oncloseModal, setInitialModal }) => {
    const history = useHistory();

    const onClick = () => {
        setInitialModal(false);
        history.push('/training');
    };

    return (
        <ErrTrainingModalStyled>
            <button className="bookFormBtnBack" onClick={oncloseModal}>
                <img src={back} alt="" width="24px" height="11.62px" />
            </button>

            <div className="trainingModal">
                <img
                    src={sad}
                    alt=""
                    className="modalImg"
                    width="54px"
                    height="54px"
                />
                <p className="modalTitle">
                    Your training is over, but not all the books have been read.
                </p>
                <p className="modalTitle">
                    You have the opportunity to start training again.
                </p>
                <button className="modalBtn" onClick={onClick}>
                    Start training
                </button>
            </div>
        </ErrTrainingModalStyled>
    );
};

export default ErrTrainingModal;
