import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Responsive from 'react-responsive';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from '../modal/Modal';
import ButtonAdd from '../buttonAdd/ButtonAdd';
import { addBookOperation } from '../../redux/operations/bookOperation';
import {
    getWillRead,
    getNowRead,
    getFinishRead,
} from '../../redux/selectors/bookSelector';
import back from '../../assets/svg/back.svg';
import LibraryFormStyled from './LibraryFormStyled';

const getYear = () => {
    return new Date().getFullYear();
};

const schema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Title too short!')
        .required('Fill in the "Book Name" field'),
    author: Yup.string().required('Fill in the field "Author of the book"'),
    year: Yup.number()
        .min(1500, 'Min value 1500')
        .max(getYear(), 'Not more than the current year')
        .required('Fill in the "Year of Release" field')
        .typeError('Enter a number'),
    numberOfPages: Yup.number()
        .min(1, 'Min value 1')
        .required('Fill in the field "Number of pages"')
        .typeError('Enter a number'),
});

const initialState = {
    title: '',
    author: '',
    year: '',
    numberOfPages: '',
};

const LibraryForm = () => {
    const dispatch = useDispatch();
    const [state] = useState({ ...initialState });
    const [isOpenModal, setIsOpenModal] = useState(false);
    const booksWillRead = useSelector(getWillRead);
    const bookNowRead = useSelector(getNowRead);
    const bookFinished = useSelector(getFinishRead);

    const Mobile = props => <Responsive {...props} maxWidth={767} />;
    const Tablet = props => <Responsive {...props} minWidth={768} />;

    const onHandlerSubmit = values => {
        dispatch(addBookOperation(values));
        setIsOpenModal(false);
    };

    const closeModal = () => {
        setIsOpenModal(false);
    };

    const openModal = () => {
        setIsOpenModal(true);
    };

    return (
        <LibraryFormStyled className="container">
            <Mobile>
                {booksWillRead.length ||
                bookNowRead.length ||
                bookFinished.length ? (
                    <h2 className="libraryFormTitle hidden"> Library</h2>
                ) : (
                    <h2 className="libraryFormTitle">Add book to library</h2>
                )}
                <ButtonAdd onHandleClick={openModal} />
                {isOpenModal && (
                    <Modal closeModal={closeModal}>
                        <div className="bookFormModal">
                            <button
                                className="bookFormBtnBack"
                                onClick={closeModal}
                            >
                                <img
                                    src={back}
                                    alt=""
                                    width="24px"
                                    height="11.62px"
                                />
                            </button>
                            <Formik
                                initialValues={state}
                                validationSchema={schema}
                                onSubmit={(values, actions) => {
                                    onHandlerSubmit({ ...values });

                                    actions.resetForm({ ...state });
                                }}
                            >
                                {({ values }) => (
                                    <Form className="bookForm">
                                        <div className="bookFormList ">
                                            <label className="bookFormListItem">
                                                <span className="bookFormListItemTitle">
                                                    The title of the book
                                                </span>
                                                <div className="wrapper">
                                                    <Field
                                                        className="bookFormInput input0"
                                                        type="text"
                                                        value={values.title}
                                                        name="title"
                                                        placeholder="..."
                                                        autoComplete="off"
                                                    />
                                                    <ErrorMessage
                                                        className="bookFormError"
                                                        component="div"
                                                        name="title"
                                                    />
                                                </div>
                                            </label>
                                            <div className="bookFormhelpers">
                                                <label className="bookFormListItem">
                                                    <span className="bookFormListItemTitle">
                                                        The author of the book
                                                    </span>
                                                    <div className="wrapper">
                                                        <Field
                                                            className="bookFormInput input1"
                                                            type="text"
                                                            value={
                                                                values.author
                                                            }
                                                            name="author"
                                                            placeholder="..."
                                                            autoComplete="off"
                                                        />
                                                        <ErrorMessage
                                                            className="bookFormError"
                                                            component="div"
                                                            name="author"
                                                        />
                                                    </div>
                                                </label>

                                                <label className="bookFormListItem">
                                                    <span className="bookFormListItemTitle">
                                                        The year of publication
                                                    </span>
                                                    <div className="wrapper">
                                                        <Field
                                                            className="bookFormInput  input2"
                                                            type="number"
                                                            value={values.year}
                                                            name="year"
                                                            placeholder="..."
                                                            autoComplete="off"
                                                        />
                                                        <ErrorMessage
                                                            className="bookFormError"
                                                            component="div"
                                                            name="year"
                                                        />
                                                    </div>
                                                </label>

                                                <label className="bookFormListItem">
                                                    <span className="bookFormListItemTitle">
                                                        Number of pages
                                                    </span>
                                                    <div className="wrapper">
                                                        <Field
                                                            className="bookFormInput input3"
                                                            type="number"
                                                            value={
                                                                values.numberOfPages
                                                            }
                                                            name="numberOfPages"
                                                            placeholder="..."
                                                            autoComplete="off"
                                                        />
                                                        <ErrorMessage
                                                            className="bookFormError"
                                                            component="div"
                                                            name="numberOfPages"
                                                        />
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            className="bookFormBtn"
                                        >
                                            Add
                                        </button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </Modal>
                )}
            </Mobile>

            <Tablet>
                <Formik
                    initialValues={state}
                    validationSchema={schema}
                    onSubmit={(values, actions) => {
                        onHandlerSubmit({ ...values });

                        actions.resetForm({ ...state });
                    }}
                >
                    {({ values }) => (
                        <Form className="bookForm">
                            <div className="bookFormList ">
                                <label className="bookFormListItem">
                                    <span className="bookFormListItemTitle">
                                        The title of the book
                                    </span>
                                    <div className="wrapper">
                                        <Field
                                            className="bookFormInput input0"
                                            type="text"
                                            value={values.title}
                                            name="title"
                                            placeholder="..."
                                            autoComplete="off"
                                        />
                                        <ErrorMessage
                                            className="bookFormError"
                                            component="div"
                                            name="title"
                                        />
                                    </div>
                                </label>
                                <div className="bookFormhelpers">
                                    <label className="bookFormListItem">
                                        <span className="bookFormListItemTitle">
                                            The author of the book
                                        </span>
                                        <div className="wrapper">
                                            <Field
                                                className="bookFormInput input1"
                                                type="text"
                                                value={values.author}
                                                name="author"
                                                placeholder="..."
                                                autoComplete="off"
                                            />
                                            <ErrorMessage
                                                className="bookFormError"
                                                component="div"
                                                name="author"
                                            />
                                        </div>
                                    </label>

                                    <label className="bookFormListItem">
                                        <span className="bookFormListItemTitle">
                                            The year of publication
                                        </span>
                                        <div className="wrapper">
                                            <Field
                                                className="bookFormInput  input2"
                                                type="number"
                                                value={values.year}
                                                name="year"
                                                placeholder="..."
                                                autoComplete="off"
                                            />
                                            <ErrorMessage
                                                className="bookFormError"
                                                component="div"
                                                name="year"
                                            />
                                        </div>
                                    </label>

                                    <label className="bookFormListItem">
                                        <span className="bookFormListItemTitle">
                                            Number of pages
                                        </span>
                                        <div className="wrapper">
                                            <Field
                                                className="bookFormInput input3"
                                                type="number"
                                                value={values.numberOfPages}
                                                name="numberOfPages"
                                                placeholder="..."
                                                autoComplete="off"
                                            />
                                            <ErrorMessage
                                                className="bookFormError"
                                                component="div"
                                                name="numberOfPages"
                                            />
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <button type="submit" className="bookFormBtn">
                                Add
                            </button>
                        </Form>
                    )}
                </Formik>
            </Tablet>
        </LibraryFormStyled>
    );
};

export default LibraryForm;
