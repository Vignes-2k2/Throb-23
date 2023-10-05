const WordHunt = ({title}) => {
  return (
    <div className="flex flex-col items-center w-full">
        <img src={title} alt="THROB'23" className="h-[6%] max-sm:h-[90px] max-xl:h-[120px] mb-[3%]" />
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSekt4xBsn8AF99KMNwE80llLqfmmKvhTwxv4qW9edSPYGE5LA/viewform?embedded=true" width="640" style={{width:'100%', height: '300vh', overflow:"hidden"}}>Loading…</iframe>
    </div>
  )
}

export default WordHunt