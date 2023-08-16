import * as Yup from 'yup';
import moment from 'moment';

export const validationSchema = Yup.object().shape({
    start: Yup.date()
        .required('Indicate the training start date')
        .max(
            moment(Date.now()).format('YYYY-MM-DD'),
            'Must be today&#8217s date!',
        ),

    end: Yup.date()
        .required('Indicate the end date of training')
        .min(Yup.ref('start'), 'Choose the correct date')
        .test({
            message: 'End date must be greater than',
            test: function (value) {
                const start = moment(this.parent.start).format('YYYY-MM-DD');
                const end = moment(value).format('YYYY-MM-DD');
                return !moment(start).isSame(moment(end));
            },
        }),
    book: Yup.object().required('You have not selected a book'),
});
