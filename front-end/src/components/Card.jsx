function Card() {
  return (
    <>
      <div className="my-8 w-[90%] bg-bgColor max-h-80 mx-auto flex flex-row justify-between rounded">
        <img
          className="w-[50%] rounded"
          src="assets/images/case-study-img1.png"
          alt=""
        />
        <div className="w-[50%] p-10 flex flex-col justify-start">
          <h2 className="text-2xl font-bold">Website Design for SCFC Canada</h2>
          <p>
            Born out of a vision, a single-minded objective that puts service
            before anything else, Swift Clearance and Forwarding Corp. surging
            forth to deliver the best services in the shipping and logistics
            scenario. Its meteoric rise stems out of a solid foundation. The
            management boasts of over 20 years of rich and varied experience in
            the shipping and freight forwarding industry.
          </p>
          <button className="d-block flex-1 w-32 me-4">Read More &gt;</button>
        </div>
      </div>
    </>
  );
}

export default Card;
