const IPLAuction = ({title}) => {
  return (
    <div className="flex flex-col items-center md:w-full sm:w-full">
        <img src={title} alt="THROB'23" className="h-[6%] max-sm:h-[90px] max-xl:h-[120px] mb-[3%]" />
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeii2HN1kuu4GW6refZd-a9C5MgASPu5zyPGYV-FlFBXOmHXQ/viewform?embedded=true" style={{width:'100%', height: '300vh', overflow:"hidden"}}>Loading…</iframe>
    </div>
  )
}

export default IPLAuction