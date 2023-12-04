const Document = ({ color, bg }) => {
  return (
    <div className="w-fit p-2.5 rounded-md" style={{ backgroundColor: bg }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24px" height="24px" fill={color}>
        <title>BUSINESS</title>
        <g id="_13.CHECK_DOCUMENT" data-name="13.CHECK DOCUMENT">
          <polygon points="24 28 8 28 8 4 24 4 24 5.87 26 3.58 26 2 6 2 6 30 26 30 26 8.14 24 10.42 24 28" />
          <path d="M28.68,2.8a1,1,0,0,0-1.41.09l-8.35,9.54L15,7.57a1,1,0,1,0-1.56,1.25l4.66,5.79a1,1,0,0,0,.76.37h0a1,1,0,0,0,.75-.34L28.77,4.21A1,1,0,0,0,28.68,2.8Z" />
          <path d="M23,6a1,1,0,0,0-1-1H10a1,1,0,0,0,0,2H22A1,1,0,0,0,23,6Z" />
          <path d="M12,9H10a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" />
          <path d="M15,13H10a1,1,0,0,0,0,2h5a1,1,0,0,0,0-2Z" />
          <path d="M22,17H10a1,1,0,0,0,0,2H22a1,1,0,0,0,0-2Z" />
          <path d="M22,21H10a1,1,0,0,0,0,2H22a1,1,0,0,0,0-2Z" />
          <path d="M22,25H10a1,1,0,0,0,0,2H22a1,1,0,0,0,0-2Z" />
        </g>
      </svg>
    </div>
  );
};

export default Document;
