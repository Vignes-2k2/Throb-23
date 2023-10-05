const Connections = ({title}) => {
  return (
    <div className="flex flex-col items-center w-full">
        <img src={title} alt="THROB'23" className="h-[6%] max-sm:h-[90px] max-xl:h-[120px] mb-[3%]" />
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdd_QVMgbT9hEvMWqwm-0WBo3u1h6Cn5dz4j85Izjgv4k6fpw/viewform?embedded=true" style={{width:'100%', height: '300vh', overflow:"hidden"}}>Loading…</iframe>
    </div>
  )
}

export default Connections