function Pdf() {
  return (
    <div className='h-full w-full absolute'>
      <object
        data='/pdf/cv.pdf'
        type='application/pdf'
        width='100%'
        height='100%'
      >
        <p>
          Alternative text - include a link{' '}
          <a href='/pdf/cv.pdf'>to the PDF!</a>
        </p>
      </object>
    </div>
  )
}

export default Pdf
