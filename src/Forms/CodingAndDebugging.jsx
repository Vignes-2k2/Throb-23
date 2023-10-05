const CodingAndDebugging = ({title}) => {
  return (
    <div className="flex flex-col items-center w-full">
        <img src={title} alt="THROB'23" className="h-[6%] max-sm:h-[90px] max-xl:h-[120px] mb-[3%]" />
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfEBA9logYCF2BI3qVwpbh5P4swAxIZh_3mWVy2j_PO8RsEAw/viewform?embedded=true" style={{width:'100%', height:'300vh', overflow:"hidden"}}>Loading…</iframe>
    </div>
  )
}

export default CodingAndDebugging