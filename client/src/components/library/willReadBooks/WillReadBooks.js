import React from 'react'
import WillReadBookItem from './WillReadBookItem';
import WillReadBooksStyled from './WillReadBooksStyled';
import Responsive from 'react-responsive'
import WillReadBookItemMobile from './WillReadBookItemMobile';

const WillReadBooks = () => {
  const Tablet = props => (
    <Responsive {...props} minWidth={768}  />
);
const Mobile = props => <Responsive {...props} maxWidth={767} />;
    return (
        <WillReadBooksStyled className='container'>
        <h2>Маю намір прочитати</h2> 
        <Tablet> 
      <div className='table-title'>
         <p>Назва книги</p>
         <p>Автор</p>
         <p>Рік</p>
         <p>Стор.</p>
      </div>
      <WillReadBookItem/>
      <WillReadBookItem/>
      <WillReadBookItem/>
      </Tablet> 
      <Mobile> 
      <WillReadBookItemMobile/>
      </Mobile> 
        </WillReadBooksStyled>
    )
}


export default WillReadBooks