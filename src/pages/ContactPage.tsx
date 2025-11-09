import { useState, useEffect } from "react";

interface FormData {
  name: string;
  age: string;
  address: string;
  inquiry: string;
}

const STORAGE_KEY = "contactFormData";

function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: "",
    address: "",
    inquiry: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // ローカルストレージからデータを読み込む
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData) as FormData;
        setFormData(parsedData);
      } catch (error) {
        console.error("Failed to parse saved form data:", error);
      }
    }
    setIsInitialized(true);
  }, []);

  // フォームデータが変更されたときにローカルストレージに保存
  useEffect(() => {
    if (
      isInitialized &&
      (formData.name !== "" ||
        formData.age !== "" ||
        formData.address !== "" ||
        formData.inquiry !== "")
    ) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }
  }, [formData, isInitialized]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // エラーをクリア
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "名前は必須項目です";
    }

    if (!formData.age.trim()) {
      newErrors.age = "年齢は必須項目です";
    } else if (isNaN(Number(formData.age)) || Number(formData.age) <= 0) {
      newErrors.age = "有効な年齢を入力してください";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      console.log("送信データ:", formData);
      setSubmitted(true);

      // 送信成功後、3秒後にリセット
      setTimeout(() => {
        setSubmitted(false);
        handleClear();
      }, 3000);
    }
  };

  const handleClear = () => {
    setFormData({
      name: "",
      age: "",
      address: "",
      inquiry: "",
    });

    // エラー情報をクリアする
    setErrors({});

    // ローカルストレージからデータを削除する
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "system-ui, -apple-system, sans-serif",
        backgroundColor: "#f5f5f5",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            marginBottom: "30px",
            color: "#333",
            textAlign: "center",
          }}
        >
          お問い合わせフォーム
        </h1>

        {submitted && (
          <div
            style={{
              backgroundColor: "#d4edda",
              color: "#155724",
              padding: "12px",
              borderRadius: "4px",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            送信が完了しました！
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* 名前 */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
                color: "#555",
              }}
            >
              名前 <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                border: `1px solid ${errors.name ? "red" : "#ddd"}`,
                borderRadius: "4px",
                fontSize: "16px",
                boxSizing: "border-box",
              }}
              placeholder="山田太郎"
            />
            {errors.name && (
              <span style={{ color: "red", fontSize: "14px" }}>
                {errors.name}
              </span>
            )}
          </div>

          {/* 年齢 */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
                color: "#555",
              }}
            >
              年齢 <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                border: `1px solid ${errors.age ? "red" : "#ddd"}`,
                borderRadius: "4px",
                fontSize: "16px",
                boxSizing: "border-box",
              }}
              placeholder="25"
            />
            {errors.age && (
              <span style={{ color: "red", fontSize: "14px" }}>
                {errors.age}
              </span>
            )}
          </div>

          {/* 住所 */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
                color: "#555",
              }}
            >
              住所
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "16px",
                boxSizing: "border-box",
              }}
              placeholder="東京都渋谷区..."
            />
          </div>

          {/* お問い合わせ内容 */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
                color: "#555",
              }}
            >
              お問い合わせ内容
            </label>
            <textarea
              name="inquiry"
              value={formData.inquiry}
              onChange={handleChange}
              rows={6}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "16px",
                boxSizing: "border-box",
                resize: "vertical",
                fontFamily: "inherit",
              }}
              placeholder="お問い合わせ内容をご記入ください"
            />
          </div>

          {/* ボタングループ */}
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              type="submit"
              style={{
                flex: 1,
                padding: "12px",
                backgroundColor: "#646cff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontSize: "16px",
                fontWeight: "500",
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#535bf2")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#646cff")
              }
            >
              送信
            </button>
            <button
              type="button"
              onClick={handleClear}
              style={{
                flex: 1,
                padding: "12px",
                backgroundColor: "#6c757d",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontSize: "16px",
                fontWeight: "500",
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#5a6268")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#6c757d")
              }
            >
              クリア
            </button>
          </div>
        </form>

        <p
          style={{
            marginTop: "20px",
            fontSize: "14px",
            color: "#666",
            textAlign: "center",
          }}
        >
          <span style={{ color: "red" }}>*</span> は必須項目です
        </p>
      </div>
    </div>
  );
}

export default ContactPage;
