function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        fontFamily: "system-ui, -apple-system, sans-serif",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "40px",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          maxWidth: "600px",
        }}
      >
        <h1
          style={{
            marginBottom: "20px",
            color: "#333",
            fontSize: "32px",
          }}
        >
          React + TypeScript + Vite
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "#666",
            marginBottom: "30px",
          }}
        >
          ようこそ！このプロジェクトは React と TypeScript で構築されています。
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              padding: "15px",
              backgroundColor: "#f0f0f0",
              borderRadius: "6px",
            }}
          >
            <h3 style={{ margin: "0 0 10px 0", color: "#333" }}>
              フレームワーク
            </h3>
            <p style={{ margin: 0, color: "#666" }}>React 18.3</p>
          </div>
          <div
            style={{
              padding: "15px",
              backgroundColor: "#f0f0f0",
              borderRadius: "6px",
            }}
          >
            <h3 style={{ margin: "0 0 10px 0", color: "#333" }}>言語</h3>
            <p style={{ margin: 0, color: "#666" }}>TypeScript 5.6</p>
          </div>
          <div
            style={{
              padding: "15px",
              backgroundColor: "#f0f0f0",
              borderRadius: "6px",
            }}
          >
            <h3 style={{ margin: "0 0 10px 0", color: "#333" }}>
              ビルドツール
            </h3>
            <p style={{ margin: 0, color: "#666" }}>Vite 5.4</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
