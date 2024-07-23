function OtherUserProfile(id) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "400px",
          justifyContent: "flex-start",
          gap: "10px",
        }}
      >
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 0px",
            gap: "10px",
            border: "2px solid #8CBDEB",
            borderRadius: "15px",
            color: "#8CBDEB",
            width: "170px",
            height: "50px",
          }}
        >
          Message
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 0px",
            gap: "10px",
            width: "170px",
            height: "50px",
            background: "#8CBDEB",
            borderRadius: "15px",
            color: "#0E0E0E",
          }}
        >
          Follow
        </div>
      </div>
    </>
  );
}

export default OtherUserProfile;
